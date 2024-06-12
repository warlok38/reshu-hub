import React from 'react';
import { RouterProvider as RRouterProvider } from 'react-router-dom';
import { useGetRouter } from 'app/routes/router';

export function RouterProvider() {
  const router = useGetRouter();

  return <RRouterProvider router={router} />;
}
