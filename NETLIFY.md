# Netlify Function (contact)

This project includes a serverless Netlify function at `netlify/functions/contact.js` which accepts `POST` requests from the contact form and forwards them to your email via SendGrid.

Environment variables (set in Netlify dashboard or locally via `netlify dev`):

- `SENDGRID_API_KEY` — your SendGrid API key
- `TO_EMAIL` — recipient email for contact submissions
- `FROM_EMAIL` — (optional) the sender email used in outgoing messages. If omitted, `TO_EMAIL` is used.
- `SENDER_NAME` — (optional) the name used in the 'from' field

To test locally with Netlify Dev:

1. Install `netlify-cli` globally if you don't have it: `npm i -g netlify-cli`
2. Create a `.env` locally based on `.env.example` or set env vars in your environment
3. Run `netlify dev` and the function will be available at `/.netlify/functions/contact`

Quick test options

- curl example:

```bash
curl -X POST http://localhost:8888/.netlify/functions/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","subject":"Test","message":"Hello"}'
```

- Node test script (uses `axios` and `dotenv`):

```bash
# Optional: set TEST_ENDPOINT to your local netlify dev URL and TEST_EMAIL
env TEST_ENDPOINT=http://localhost:8888/.netlify/functions/contact TEST_EMAIL=test@example.com node scripts/test-contact.js
# or with npm script
npm run test:contact
```

- Postman: import the curl command above or create a POST request to `http://localhost:8888/.netlify/functions/contact` with JSON body.

When deployed to Netlify, set the env vars in the site UI: Site settings → Build & deploy → Environment.
