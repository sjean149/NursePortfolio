// Base URL of the Express API. Set VITE_API_URL in .env.development locally
// and in the Render static site's environment for production.
export const API_URL = (
  import.meta.env.VITE_API_URL || "http://localhost:5000"
).replace(/\/+$/, "");
