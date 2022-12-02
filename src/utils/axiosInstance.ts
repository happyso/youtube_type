import axios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_YOUTUBE_BASE_URL,
  params: {
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
  },
};
export const axiosInstance = axios.create(config);
