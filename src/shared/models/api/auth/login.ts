import { z } from 'zod';

export const LoginEntity = z.object({
  token: z.string(),
});

export type LoginEntity = z.infer<typeof LoginEntity>;
