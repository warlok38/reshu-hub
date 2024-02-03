import { BaseQueryApi } from '@reduxjs/toolkit/dist/query';
import { BaseQueryFn } from '@reduxjs/toolkit/query';
import {
  AxiosBaseQueryArgs,
  AxiosBaseQueryMeta,
  axiosBaseQuery,
} from './axiosBaseQuery';
import { BaseQueryExtraOptions } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { QueryReturnValue } from '@reduxjs/toolkit/src/query/baseQueryTypes';
import { Error } from 'shared/lib/errors/error';
import { ZodType } from 'zod';
import { isProduction } from 'shared/utils/isProduction';
import { isEmpty } from 'lodash';
import { createInvalidServerDataError } from 'shared/lib/errors/invalidServerDataError';

type QueryArgsOrArgsCreator<TqueryArg> =
  | AxiosBaseQueryArgs
  | ((args: TqueryArg) => AxiosBaseQueryArgs);

function createQueryArgs<TQueryArg>(
  queryArgsOrArgsCreator: QueryArgsOrArgsCreator<TQueryArg>,
  queryArgs: TQueryArg
) {
  return typeof queryArgsOrArgsCreator === 'function'
    ? queryArgsOrArgsCreator(queryArgs)
    : queryArgsOrArgsCreator;
}

type QueryFn<TResult, TQueryArg> = (
  queryArgs: TQueryArg,
  api: BaseQueryApi,
  extraOptions: BaseQueryExtraOptions<BaseQueryFn>,
  baseQuery: ReturnType<typeof axiosBaseQuery>
) => Promise<QueryReturnValue<TResult, Error>>;

type TransformResponse<TResult, TResponse> = (
  response: TResponse,
  meta: AxiosBaseQueryMeta | undefined
) => TResult;

export function createQueryFn<TResult, TQueryArg, TResponse>(
  queryArgsOrArgsCreator: QueryArgsOrArgsCreator<TQueryArg>,
  zodSchema: ZodType<TResponse extends undefined ? TResult : TResponse>,
  transformResponse?: TransformResponse<TResult, TResponse>
): QueryFn<TResult, TQueryArg>;
export function createQueryFn<TQueryArg>(
  queryArgsOrArgsCreator: QueryArgsOrArgsCreator<TQueryArg>,
  zodSchema?: never,
  transformResponse?: never
): QueryFn<undefined, TQueryArg>;
export function createQueryFn<TResult, TQueryArg, TResponse>(
  queryArgsOrArgsCreator: QueryArgsOrArgsCreator<TQueryArg>,
  zodSchema?: TResult extends undefined
    ? undefined
    : ZodType<TResponse extends undefined ? TResult : TResponse>,
  transformResponse?: TResult extends undefined
    ? undefined
    : TransformResponse<TResult, TResponse>
) {
  return (
    quertArgs: TQueryArg,
    api: BaseQueryApi,
    extraOptions: BaseQueryExtraOptions<BaseQueryFn>,
    baseQuery: ReturnType<typeof axiosBaseQuery>
  ): Promise<QueryReturnValue<TResult, Error>> =>
    queryFn<TResult, TResponse>(
      createQueryArgs<TQueryArg>(queryArgsOrArgsCreator, quertArgs),
      api,
      extraOptions,
      baseQuery,
      zodSchema,
      transformResponse
    );
}

async function queryFn<TResult, TResponse>(
  args: AxiosBaseQueryArgs,
  api: BaseQueryApi,
  extraOptions: BaseQueryExtraOptions<BaseQueryFn>,
  baseQuery: ReturnType<typeof axiosBaseQuery>,
  zodSchema?: ZodType,
  transformResponse?: TransformResponse<TResult, TResponse>
): Promise<QueryReturnValue<TResult, Error>> {
  const response = await baseQuery(args, api, extraOptions);

  if (!zodSchema || response.error) {
    return response as QueryReturnValue<TResult, Error>;
  }

  const parsedData = zodSchema.safeParse(response.data);

  if (parsedData.success) {
    return {
      data: transformResponse
        ? transformResponse(parsedData.data, response.meta)
        : parsedData.data,
    };
  }

  if (!isProduction() && !isEmpty(parsedData.error.issues)) {
    console.error('Zod issues: ', parsedData.error.issues);
  }

  return {
    error: createInvalidServerDataError(
      parsedData.error.issues,
      parsedData.error.message
    ),
  };
}
