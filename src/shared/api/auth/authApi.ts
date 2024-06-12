import { mainApi } from 'shared/api/http/mainApi';
import { createQueryFn } from 'shared/api/http/queryFnBuilder';
import { INIT_API, LOGIN_API, LOGOUT_API } from './consts';
import { LoginParams } from 'shared/models/params/auth/login';
import { LoginEntity } from 'shared/models/api/auth/login';
import { InitEntity } from 'shared/models/api/auth/init';

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
    init: build.query<InitEntity, void>({
      queryFn: createQueryFn(
        () => ({
          url: INIT_API,
          method: 'GET',
        }),
        InitEntity
      ),
    }),
  }),
  overrideExisting: false,
});

export const { useLoginMutation, useLazyLogoutQuery, useLazyInitQuery } =
  authApi;
