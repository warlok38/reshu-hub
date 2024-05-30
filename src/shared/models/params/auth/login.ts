import { z } from 'zod';

export const LoginParams = z.object({
  email: z.string(),
  password: z.string(),
});

export type LoginParams = z.infer<typeof LoginParams>;
