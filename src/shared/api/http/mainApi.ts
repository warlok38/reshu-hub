import { createApi } from '@reduxjs/toolkit/dist/query';
import { axiosBaseQuery } from './axiosBaseQuery';

export const mainApi = createApi({
  baseQuery: axiosBaseQuery(),
  endpoints: () => ({}),
});
