export const headerRoutes = {
  news: { path: '/news', name: 'Новости', index: true },
  events: { path: '/events', name: 'Мероприятия' },
  lectures: {
    path: '/lectures',
    name: 'Лекции',
    nestedRoutes: [{ path: ':id' }],
  },
  gallery: {
    path: '/gallery',
    name: 'Галерея',
    nestedRoutes: [{ path: ':id' }],
  },
  about: { path: '/about', name: 'О нас' },
} as const;
