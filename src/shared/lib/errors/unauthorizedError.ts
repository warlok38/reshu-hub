import { z, BRAND } from 'zod';
import { HttpErrorCodesEnum } from './types';
import { HttpErrorShema, createHttpError } from './httpError';
import { isError } from './error';

export const UnauthorizedErrorSchema = z
  .object({
    code: z.literal(HttpErrorCodesEnum.Unauthorized),
  })
  .merge(HttpErrorShema)
  .brand<'Unauthorized'>();

export type UnauthorizedError = z.infer<typeof UnauthorizedErrorSchema>;

export function createUnauthorizedError(
  message?: string,
  data?: unknown
): UnauthorizedError {
  return {
    ...createHttpError(
      HttpErrorCodesEnum.Unauthorized,
      message || 'Ошибка авторизации',
      data,
      undefined,
      !!message
    ),
    [BRAND]: {
      Unauthorized: true,
    },
  };
}

export const isUnauthorizedError = isError(UnauthorizedErrorSchema);
