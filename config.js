// config.js — runtime configuration loaded from environment-injected secrets.
//
// This project NEVER hardcodes API keys. Values come from `window.__ENV`,
// which is populated by env.generated.js (generated at build/deploy time from
// environment variables / secrets — see scripts/build-env.mjs and README).
//
// SECURITY:
//   - PADDLE_API_KEY, SUPABASE_KEY (publishable/anon) may be used client-side.
//   - OPENAI_API_KEY and STRIPE_SECRET are SERVER-ONLY. Do not read them in
//     browser code; call a backend / serverless function that holds them.
window.__ENV = window.__ENV || {};

window.CONFIG = {
  paddleApiKey: window.__ENV.PADDLE_API_KEY || "",
  openaiApiKey: window.__ENV.OPENAI_API_KEY || "", // server-side only
  supabaseKey: window.__ENV.SUPABASE_KEY || "",
  stripeSecret: window.__ENV.STRIPE_SECRET || "", // server-side only
};

// Example (server-side / Node or serverless function):
//   const stripe = require("stripe")(process.env.STRIPE_SECRET);
// Never expose STRIPE_SECRET or OPENAI_API_KEY to the client bundle.
