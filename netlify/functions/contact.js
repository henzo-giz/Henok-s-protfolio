const sgMail = require('@sendgrid/mail');

exports.handler = async function (event, context) {
  // Allow only POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
      headers: { 'Allow': 'POST' }
    };
  }

  let data;
  try {
    data = JSON.parse(event.body);
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid JSON' }),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    };
  }

  const { name, email, subject, message } = data || {};
  if (!email || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing required fields' }),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    };
  }

  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
  const TO_EMAIL = process.env.TO_EMAIL;
  const FROM_EMAIL = process.env.FROM_EMAIL || TO_EMAIL;
  const SENDER_NAME = process.env.SENDER_NAME || 'Portfolio Contact';

  if (!SENDGRID_API_KEY || !TO_EMAIL) {
    console.error('Missing env vars');
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server misconfiguration' }),
      headers: { 'Access-Control-Allow-Origin': '*' }
    };
  }

  sgMail.setApiKey(SENDGRID_API_KEY);

  const mail = {
    to: TO_EMAIL,
    from: FROM_EMAIL,
    subject: `[Portfolio Contact] ${subject || 'New message'}`,
    html: `<p><strong>Name:</strong> ${name || '—'}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Subject:</strong> ${subject}</p>
           <hr/>
           <p>${(message || '').replace(/\n/g, '<br/>')}</p>`
  };

  try {
    await sgMail.send(mail);
    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    };
  } catch (error) {
    console.error('SendGrid error:', error?.response?.body || error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
      headers: { 'Access-Control-Allow-Origin': '*' }
    };
  }
};