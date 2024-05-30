import { mainApi } from 'shared/api/http/mainApi';
import { createQueryFn } from 'shared/api/http/queryFnBuilder';
import { LOGIN_API, LOGOUT_API } from './consts';
import { LoginParams } from 'shared/models/params/auth/login';
import { LoginEntity } from 'shared/models/api/auth/login';

export const authApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginEntity, LoginParams>({
      queryFn: createQueryFn(
        (data) => ({
          url: LOGIN_API,
          method: 'POST',
          data,
        }),
        LoginEntity
      ),
    }),
    logout: build.query<void, void>({
      queryFn: createQueryFn(() => ({
        url: LOGOUT_API,
        method: 'GET',
      })),
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation, useLazyLogoutQuery } = authApi;
