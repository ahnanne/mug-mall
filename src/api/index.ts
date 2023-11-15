import axios, { InternalAxiosRequestConfig } from 'axios';

export const BASE_URL = 'https://fakestoreapi.com'; // TODO:

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  // withCredentials: true, // default - false
});

const requestHandler = (config: InternalAxiosRequestConfig) => {
  const accessToken = ''; // TODO:

  if (accessToken) {
    config.headers!['Authorization'] = `Bearer ${accessToken}`;
  }

  return config;
};

api.interceptors.request.use((config) => requestHandler(config));

export default api;
