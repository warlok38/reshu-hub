import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import { headerRoutes, routes } from 'shared/models';

const News = React.lazy(() => import('pages/News'));
const Events = React.lazy(() => import('pages/Events'));
const Lectures = React.lazy(() => import('pages/Lectures'));
const About = React.lazy(() => import('pages/About'));
const NotFound = React.lazy(() => import('pages/NotFound'));
const Detail = React.lazy(() => import('pages/Lectures/Detail'));

export type Route = Omit<RouteObject, 'children'>;

export const publicRoutes: Route[] = [
  {
    path: '/',
    element: (
      <Navigate
        to={headerRoutes.news.path}
        replace
      />
    ),
  },
  {
    path: headerRoutes.news.path,
    element: <News />,
  },
  {
    path: headerRoutes.events.path,
    element: <Events />,
  },
  {
    path: headerRoutes.lectures.path,
    element: <Lectures />,
  },
  {
    path: routes.lecturesDetail.path,
    element: <Detail />,
  },
  {
    path: headerRoutes.about.path,
    element: <About />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
