import { z, BRAND } from 'zod';
import { HttpErrorCodesEnum } from './types';
import { HttpErrorShema, createHttpError } from './httpError';
import { isError } from './error';

export const ServerInternalErrorSchema = z
  .object({
    code: z.literal(HttpErrorCodesEnum.InternalServerError),
  })
  .merge(HttpErrorShema)
  .brand<'ServerInternal'>();

export type ServerInternalError = z.infer<typeof ServerInternalErrorSchema>;

export function createServerInternalError(
  message?: string,
  data?: unknown
): ServerInternalError {
  return {
    ...createHttpError(
      HttpErrorCodesEnum.InternalServerError,
      message || 'Внутренняя ошибка сервера',
      data,
      undefined,
      !!message
    ),
    [BRAND]: {
      ServerInternal: true,
    },
  };
}

export const isServerInternalError = isError(ServerInternalErrorSchema);
