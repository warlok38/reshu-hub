import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import { headerRoutes } from 'shared/models';

const News = React.lazy(() => import('pages/News'));
const Events = React.lazy(() => import('pages/Events'));
const Materials = React.lazy(() => import('pages/Materials/List'));
const MaterialsDetail = React.lazy(() => import('pages/Materials/Detail'));
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
    path: headerRoutes.materials.path,
    element: <Materials />,
    handle: { crumb: headerRoutes.materials.path },
    children: [
      {
        path: ':id',
        element: <MaterialsDetail />,
        handle: { crumb: ':id' },
      },
      {
        path: ':id/edit',
        element: <div>Edit page</div>,
        handle: { crumb: ':id/edit' },
      },
      {
        path: 'new',
        element: <div>New page</div>,
        handle: { crumb: 'new' },
      },
    ],
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
