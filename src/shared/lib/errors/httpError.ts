import { z } from 'zod';
import { ErrorSchema, createError, isError } from './error';

export const HttpErrorShema = ErrorSchema.merge(
  z.object({
    code: z.string().or(z.number()).optional(),
    data: z.unknown().optional(),
    hasOriginalMessage: z.boolean(),
  })
);

export type HttpError = z.infer<typeof HttpErrorShema>;
export const isHttpError = isError<HttpError>(HttpErrorShema);

export function createHttpError(
  code?: string | number,
  message?: string,
  data?: unknown,
  stack?: string,
  hasOriginalMessage?: boolean
): HttpError {
  return {
    ...createError(message || 'Ошибка получения данных', stack),
    code,
    data,
    hasOriginalMessage: !!hasOriginalMessage,
  };
}
