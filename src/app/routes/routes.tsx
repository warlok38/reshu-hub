import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import { headerRoutes } from 'shared/models';

const News = React.lazy(() => import('pages/News'));
const Events = React.lazy(() => import('pages/Events'));
const Lectures = React.lazy(() => import('pages/Lectures'));
const LecturesDetail = React.lazy(() => import('pages/Lectures/Detail'));
const Gallery = React.lazy(() => import('pages/Gallery'));
const About = React.lazy(() => import('pages/About'));
const NotFound = React.lazy(() => import('pages/NotFound'));

export type Route = RouteObject;

export const publicRoutes: Route[] = [
  {
    index: true,
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
    children: headerRoutes.lectures.nestedRoutes.map((props) => ({
      ...props,
      element: <LecturesDetail />,
    })),
  },
  {
    path: headerRoutes.gallery.path,
    element: <Gallery />,
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
