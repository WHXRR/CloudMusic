const devBaseURL = "https://wyy-api-blond.vercel.app";
const proBaseURL = "https://wyy-api-blond.vercel.app";
export const BASE_URL =
  process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL
export const TIMEOUT = 8000