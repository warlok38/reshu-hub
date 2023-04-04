import { RouterProvider as RRouterProvider } from 'react-router-dom';
import { getRouter } from 'app/routes/router';

const router = getRouter();

export function RouterProvider() {
  return <RRouterProvider router={router} />;
}
