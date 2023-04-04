import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import { routes } from 'shared/models';

const News = React.lazy(() => import('pages/News'));
const Events = React.lazy(() => import('pages/Events'));
const Lectures = React.lazy(() => import('pages/Lectures'));
const NotFound = React.lazy(() => import('pages/NotFound'));

export type Route = Omit<RouteObject, 'children'>;

export const publicRoutes: Route[] = [
  {
    path: '/',
    element: (
      <Navigate
        to={routes.news.path}
        replace
      />
    ),
  },
  {
    path: routes.news.path,
    element: <News />,
  },
  {
    path: routes.events.path,
    element: <Events />,
  },
  {
    path: routes.lectures.path,
    element: <Lectures />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
