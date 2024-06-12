import { z } from 'zod';

export const roleCodesEnum = z.enum(['admin', 'teacher', 'student', 'guest']);
