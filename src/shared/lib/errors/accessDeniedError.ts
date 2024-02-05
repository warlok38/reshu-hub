import { z, BRAND } from 'zod';
import { HttpErrorCodesEnum } from './types';
import { HttpErrorShema, createHttpError } from './httpError';
import { isError } from './error';

export const AccessDeniedErrorSchema = z
  .object({
    code: z.literal(HttpErrorCodesEnum.AccessDenied),
  })
  .merge(HttpErrorShema)
  .brand<'AccessDenied'>();

export type AccessDeniedError = z.infer<typeof AccessDeniedErrorSchema>;

export function createAccessDeniedError(
  message?: string,
  data?: unknown
): AccessDeniedError {
  return {
    ...createHttpError(
      HttpErrorCodesEnum.AccessDenied,
      message || 'Нет доступа к разделу',
      data,
      undefined,
      !!message
    ),
    [BRAND]: {
      AccessDenied: true,
    },
  };
}

export const isAccessDeniedError = isError(AccessDeniedErrorSchema);
