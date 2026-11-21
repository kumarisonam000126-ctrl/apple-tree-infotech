// Normalize API base URL: Use VITE_API_URL if provided, otherwise default to "/api"
const rawUrl = (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.VITE_API_URL) || "";
const API_BASE_URL = rawUrl ? rawUrl.replace(/\/+$/, "") : "/api";

export default API_BASE_URL;