import { z } from 'zod';

export const routeCodesEnum = z.enum([
  'news',
  'events',
  'satellite',
  'materials',
  'gallery',
  'about',
  'add',
]);
