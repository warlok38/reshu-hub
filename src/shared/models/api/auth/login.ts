import { z } from 'zod';

export const LoginEntity = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
});

export type LoginEntity = z.infer<typeof LoginEntity>;
