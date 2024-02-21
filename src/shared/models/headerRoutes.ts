import { routeCodesEnum } from 'shared/constants/routeCodes';

export const headerRoutes = {
  public: [
    {
      path: '/news',
      code: routeCodesEnum.enum.news,
      name: 'Новости',
      index: true,
      nestedRoutes: [{ path: ':id' }, { path: 'new', name: 'Создание' }],
    },
    {
      path: '/events',
      code: routeCodesEnum.enum.events,
      name: 'Мероприятия',
      nestedRoutes: [{ path: ':id' }],
    },
    {
      path: '/materials',
      code: routeCodesEnum.enum.materials,
      name: 'Материалы',
      nestedRoutes: [
        { path: ':id' },
        { path: ':id/edit', name: 'Редактирование' },
        { path: 'new', name: 'Создание' },
      ],
    },
    {
      path: '/gallery',
      code: routeCodesEnum.enum.gallery,
      name: 'Галерея',
      nestedRoutes: [{ path: ':id' }],
    },
    { path: '/about', code: routeCodesEnum.enum.about, name: 'О нас' },
  ],
  admin: [
    {
      path: '/add',
      code: routeCodesEnum.enum.add,
    },
  ],
} as const;
