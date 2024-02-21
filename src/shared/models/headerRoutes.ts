import { routeCodesEnum } from 'shared/constants/routeCodes';
import * as routePaths from 'shared/constants/routePaths';

export const headerRoutes = {
  public: [
    {
      path: routePaths.NEWS_PATH,
      code: routeCodesEnum.enum.news,
      name: 'Новости',
      index: true,
      nestedRoutes: [{ path: ':id' }, { path: 'new', name: 'Создание' }],
    },
    {
      path: routePaths.EVENTS_PATH,
      code: routeCodesEnum.enum.events,
      name: 'Мероприятия',
      nestedRoutes: [{ path: ':id' }],
    },
    {
      path: routePaths.MATERIALS_PATH,
      code: routeCodesEnum.enum.materials,
      name: 'Материалы',
      nestedRoutes: [
        { path: ':id' },
        { path: ':id/edit', name: 'Редактирование' },
        { path: 'new', name: 'Создание' },
      ],
    },
    {
      path: routePaths.GALLERY_PATH,
      code: routeCodesEnum.enum.gallery,
      name: 'Галерея',
      nestedRoutes: [{ path: ':id' }],
    },
    {
      path: routePaths.ABOUT_PATH,
      code: routeCodesEnum.enum.about,
      name: 'О нас',
    },
  ],
  admin: [
    {
      path: routePaths.ADD_PATH,
      code: routeCodesEnum.enum.add,
    },
  ],
} as const;
