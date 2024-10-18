import axios from "axios";

const baseURL = "https://your-api-base-url.com";
const accessToken = "your_access_token";

const axiosInstance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  },
});

// Optional: Add interceptors if needed
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // Handle errors globally if necessary
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
