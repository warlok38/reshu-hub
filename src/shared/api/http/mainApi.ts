import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './axiosBaseQuery';

export const mainApi = createApi({
  baseQuery: axiosBaseQuery(),
  endpoints: () => ({}),
});
