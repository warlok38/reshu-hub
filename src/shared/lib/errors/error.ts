import { z, ZodType } from 'zod';

export const ErrorSchema = z.object({
  message: z.string().optional(),
  stack: z.string().optional(),
});

export type Error = z.infer<typeof ErrorSchema> & { [key: string]: unknown };

export function createError(message?: string, stack?: string): Error {
  return { message, stack };
}

export const isError =
  <TType>(zodShema: ZodType) =>
  (error: unknown): error is TType =>
    zodShema.safeParse(error).success;
