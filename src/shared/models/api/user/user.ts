import { z } from 'zod';
import { UserRoleEntity } from './role';

export const UserEntity = z.object({
  id: z.number(),
  email: z.string(),
  firstName: z.string(),
  middleName: z.string(),
  lastName: z.string(),
  role: UserRoleEntity,
});

export type UserEntity = z.infer<typeof UserEntity>;
