import { roleCodesEnum } from 'shared/constants/roleCodes';
import { z } from 'zod';

export const UserRoleEntity = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  code: roleCodesEnum,
});

export type UserRoleEntity = z.infer<typeof UserRoleEntity>;
export type UserRoles = z.infer<typeof roleCodesEnum>;
