import { BASE_API_URL } from '@/fixtures/api-url';
import axios from 'axios';

const instance = axios.create({
  baseURL: BASE_API_URL,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (!error.isAxiosError) {
      return Promise.reject(error);
    }

    return Promise.reject(
      error.response?.data?.message || error.response?.status,
    );
  },
);

export default instance;
