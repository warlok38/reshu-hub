import React from 'react';
import { RouteObject } from 'react-router-dom';
import * as routePath from 'shared/constants/routePaths';

const Add = React.lazy(() => import('pages/Add'));

export type Route = RouteObject;

export const adminRoutes: Route[] = [
  {
    path: routePath.ADD_PATH,
    element: <Add />,
  },
];
