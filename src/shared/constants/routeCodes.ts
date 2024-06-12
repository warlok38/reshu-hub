import { z } from 'zod';

export const routeCodesEnum = z.enum([
  'news',
  'events',
  'satellite',
  'materials',
  'gallery',
  'about',
]);
export const adminRouteCodesEnum = z.enum(['add']);
