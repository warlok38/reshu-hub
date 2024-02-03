import { AxiosResponse } from 'axios';

export const getDataFromResponse = <T>(response: AxiosResponse<T>): T =>
  response.data;
