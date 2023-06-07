export const headerRoutes = {
  news: { path: '/news', name: 'Новости', index: true },
  events: {
    path: '/events',
    name: 'Мероприятия',
    nestedRoutes: [{ path: ':id' }],
  },
  materials: {
    path: '/materials',
    name: 'Материалы',
    nestedRoutes: [
      { path: ':id' },
      { path: ':id/edit', name: 'Редактирование' },
      { path: 'new', name: 'Создание' },
    ],
  },
  gallery: {
    path: '/gallery',
    name: 'Галерея',
    nestedRoutes: [{ path: ':id' }],
  },
  about: { path: '/about', name: 'О нас' },
} as const;
