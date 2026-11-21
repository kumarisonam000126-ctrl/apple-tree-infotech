// Normalize API base URL and strip trailing slashes
const rawUrl = import.meta.env.VITE_API_URL || "";
const API_BASE_URL = rawUrl ? rawUrl.replace(/\/+$/, "") : "";

export default API_BASE_URL;