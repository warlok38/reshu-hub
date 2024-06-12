import { z } from 'zod';
import { UserEntity } from '../user/user';

export const InitEntity = z.object({
  user: UserEntity,
});

export type InitEntity = z.infer<typeof InitEntity>;
