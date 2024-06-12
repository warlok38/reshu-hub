import { z } from 'zod';

export const RegistrationEntity = z.object({
  middleName: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  password: z.string(),
  email: z.string(),
});

export const RegistrationFormEntity = z
  .object({
    passwordConfirm: z.string(),
  })
  .merge(RegistrationEntity);

export type RegistrationEntity = z.infer<typeof RegistrationEntity>;
export type RegistrationFormEntity = z.infer<typeof RegistrationFormEntity>;
