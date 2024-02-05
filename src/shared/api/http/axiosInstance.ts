import axios from 'axios';
import { ROOT_URL } from './consts';

export const axiosInstanсe = axios.create({
  baseURL: ROOT_URL,
});

axiosInstanсe.interceptors.request.use((config) => ({
  ...config,
}));

axiosInstanсe.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error)) {
      return Promise.reject(error);
    }
  }
);
