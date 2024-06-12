import type { AxiosRequestConfig } from 'axios';
import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import {
  BaseQueryApi,
  QueryReturnValue,
} from '@reduxjs/toolkit/src/query/baseQueryTypes';
import axios, { AxiosResponse } from 'axios';
import { createAccessDeniedError } from 'shared/lib/errors/accessDeniedError';
import { createBadRequestError } from 'shared/lib/errors/badRequestError';
import { createError, Error as AppError } from 'shared/lib/errors/error';
import { createHttpError } from 'shared/lib/errors/httpError';
import { createNotFoundError } from 'shared/lib/errors/notFoundError';
import { createServerInternalError } from 'shared/lib/errors/serverInternalError';
import { HttpErrorCodesEnum } from 'shared/lib/errors/types';
import { createUnauthorizedError } from 'shared/lib/errors/unauthorizedError';
import { getDataFromResponse } from 'shared/utils/getDataFromResponse';
import { axiosInstanсe } from './axiosInstance';
import { refreshToken } from 'shared/utils/refreshToken';

export type AxiosBaseQueryArgs = {
  url: string;
  method: AxiosRequestConfig['method'];
  data?: AxiosRequestConfig['data'];
  params?: AxiosRequestConfig['params'];
  headers?: AxiosRequestConfig['headers'];
};

//TODO разобраться any. Если делать не any ломается queryFn
// export type AxiosBaseQueryMeta = {
//   message?: string;
// };
export type AxiosBaseQueryMeta = any;

function createErrorFromAxiosResponse({ data, status }: AxiosResponse) {
  const map = {
    [HttpErrorCodesEnum.AccessDenied]: createAccessDeniedError,
    [HttpErrorCodesEnum.BadRequest]: createBadRequestError,
    [HttpErrorCodesEnum.InternalServerError]: createServerInternalError,
    [HttpErrorCodesEnum.NotFound]: createNotFoundError,
    [HttpErrorCodesEnum.Unauthorized]: createUnauthorizedError,
  };

  const code = status.toString() as unknown as HttpErrorCodesEnum;

  return (
    map[code]?.(data?.message, data?.data) ||
    createHttpError(
      status,
      data?.message,
      data?.data,
      undefined,
      !!data?.message
    )
  );
}

export function axiosBaseQuery(
  { baseUrl }: { baseUrl: string } = { baseUrl: '' }
  // eslint-disable-next-line
): BaseQueryFn<AxiosBaseQueryArgs, unknown, AppError, {}, AxiosBaseQueryMeta> {
  return async function (
    { url, method, data, params, headers }: AxiosBaseQueryArgs,
    api: BaseQueryApi, // eslint-disable-line @typescript-eslint/no-unused-vars
    extraOptions: Record<string, string> // eslint-disable-line @typescript-eslint/no-unused-vars
  ): Promise<QueryReturnValue<unknown, AppError, AxiosBaseQueryMeta>> {
    try {
      const result: AxiosResponse<ApiResponseEntity<unknown>> =
        await axiosInstanсe({
          url: baseUrl + url,
          method,
          data,
          params,
          headers: {
            Authorization: `${refreshToken.getToken()}`,
            ...headers,
          },
        });
      return {
        data: getDataFromResponse(result).data,
        meta: { message: result.data.message },
      };
    } catch (err) {
      return {
        error:
          axios.isAxiosError(err) && err.response
            ? createErrorFromAxiosResponse(err.response)
            : createError(err instanceof Error ? err.message : ''),
      };
    }
  };
}
