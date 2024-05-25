import React from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import * as routePath from 'shared/constants/routePaths';

const News = React.lazy(() => import('pages/News'));
const Events = React.lazy(() => import('pages/Events/List'));
const EventsDetail = React.lazy(() => import('pages/Events/Detail'));
const Satellite = React.lazy(() => import('pages/Satellite'));
const Materials = React.lazy(() => import('pages/Materials/List'));
const MaterialsDetail = React.lazy(() => import('pages/Materials/Detail'));
const Gallery = React.lazy(() => import('pages/Gallery'));
const About = React.lazy(() => import('pages/About'));
const NotFound = React.lazy(() => import('pages/NotFound'));
const NewsDetail = React.lazy(() => import('pages/NewsDetail'));

export type Route = RouteObject;

export const publicRoutes: Route[] = [
  {
    index: true,
    element: (
      <Navigate
        to={routePath.NEWS_PATH}
        replace
      />
    ),
  },
  {
    path: routePath.NEWS_PATH,
    element: <News />,
    children: [
      {
        path: ':id',
        element: <NewsDetail />,
      },
    ],
  },
  {
    path: routePath.EVENTS_PATH,
    element: <Events />,
    children: [
      {
        path: ':id',
        element: <EventsDetail />,
      },
    ],
  },
  {
    path: routePath.SATELLITE_PATH,
    element: <Satellite />,
  },
  {
    path: routePath.MATERIALS_PATH,
    element: <Materials />,
    handle: { crumb: routePath.MATERIALS_PATH },
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
    path: routePath.GALLERY_PATH,
    element: <Gallery />,
  },
  {
    path: routePath.ABOUT_PATH,
    element: <About />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
