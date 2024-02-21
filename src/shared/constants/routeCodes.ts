import { z } from 'zod';

export const routeCodesEnum = z.enum([
  'news',
  'events',
  'materials',
  'gallery',
  'about',
  'add',
]);
