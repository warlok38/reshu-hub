import { z, BRAND } from 'zod';
import { HttpErrorCodesEnum } from './types';
import { HttpErrorShema, createHttpError } from './httpError';
import { isError } from './error';

export const BadRequestErrorSchema = z
  .object({
    code: z.literal(HttpErrorCodesEnum.BadRequest),
  })
  .merge(HttpErrorShema)
  .brand<'BadRequest'>();

export type BadRequestError = z.infer<typeof BadRequestErrorSchema>;

export function createBadRequestError(
  message?: string,
  data?: unknown
): BadRequestError {
  return {
    ...createHttpError(
      HttpErrorCodesEnum.BadRequest,
      message || 'Ошибка запроса',
      data,
      undefined,
      !!message
    ),
    [BRAND]: {
      BadRequest: true,
    },
  };
}

export const isBadRequestError = isError(BadRequestErrorSchema);
