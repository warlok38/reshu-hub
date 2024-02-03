import axios from 'axios';
import { ROOT_URL } from './consts';

export const axiosInstanse = axios.create({
  baseURL: ROOT_URL,
});
