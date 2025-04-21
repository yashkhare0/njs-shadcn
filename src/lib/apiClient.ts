/**
 * API Client for making requests to backend services
 */

import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
});

// Add request interceptor for authentication
apiClient.interceptors.request.use((config) => {
  // You can add auth token to headers here if needed
  return config;
});

// Add response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export default apiClient;
