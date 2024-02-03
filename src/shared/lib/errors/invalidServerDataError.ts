import { z, BRAND, ZodIssue } from 'zod';
import { ErrorSchema, createError, isError } from './error';

export const InvalidServerDataErrorSchema = z
  .object({
    zodIssues: z.array(z.object({})),
  })
  .merge(ErrorSchema)
  .brand<'InvalidServerData'>();

export type InvalidServerDataError = z.infer<
  typeof InvalidServerDataErrorSchema
>;

export function createInvalidServerDataError(
  zodIssues: ZodIssue[],
  message?: string
): InvalidServerDataError {
  return {
    ...createError(message || 'Неправильный формат данных'),
    [BRAND]: {
      InvalidServerData: true,
    },
    zodIssues,
  };
}

export const isInvalidServerDataError = isError<InvalidServerDataError>(
  InvalidServerDataErrorSchema
);
