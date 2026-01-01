// Simple test script to POST to the Netlify contact function
// Usage:
// TEST_ENDPOINT=http://localhost:8888/.netlify/functions/contact TEST_EMAIL=you@example.com node scripts/test-contact.js

require('dotenv').config();
const axios = require('axios');

const endpoint = process.env.TEST_ENDPOINT || 'http://localhost:8888/.netlify/functions/contact';
const email = process.env.TEST_EMAIL || 'test@example.com';

const payload = {
  name: 'Test User',
  email,
  subject: 'Automated Test',
  message: 'This is a test message from scripts/test-contact.js'
};

(async () => {
  try {
    console.log(`POSTing to ${endpoint}`);
    const res = await axios.post(endpoint, payload, { headers: { 'Content-Type': 'application/json' } });
    console.log('Response status:', res.status);
    console.log('Response data:', res.data);
  } catch (err) {
    if (err.response) {
      console.error('Error response status:', err.response.status);
      console.error('Error response data:', err.response.data);
    } else {
      console.error('Error:', err.message);
    }
    process.exit(1);
  }
})();