import { z, BRAND } from 'zod';
import { HttpErrorCodesEnum } from './types';
import { HttpErrorShema, createHttpError } from './httpError';
import { isError } from './error';

export const NotFoundErrorSchema = z
  .object({
    code: z.literal(HttpErrorCodesEnum.NotFound),
  })
  .merge(HttpErrorShema)
  .brand<'NotFound'>();

export type NotFoundError = z.infer<typeof NotFoundErrorSchema>;

export function createNotFoundError(
  message?: string,
  data?: unknown
): NotFoundError {
  return {
    ...createHttpError(
      HttpErrorCodesEnum.NotFound,
      message || 'Не найдено',
      data,
      undefined,
      !!message
    ),
    [BRAND]: {
      NotFound: true,
    },
  };
}

export const isNotFoundError = isError<NotFoundError>(NotFoundErrorSchema);
