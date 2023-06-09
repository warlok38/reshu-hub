import React from 'react';
import { publicRoutes } from './routes';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from 'react-router-dom';
import { Layout } from 'shared/components/Layout';

export function getRouter() {
  const unprotectedRoutes = publicRoutes.map(
    ({ index, path, element, handle, children }) => {
      return index ? (
        <Route
          index={index}
          key={path}
          element={element}
        />
      ) : (
        <Route
          key={path}
          path={path}
          handle={handle}
          element={element}
        >
          {children?.map((children) => (
            <Route
              key={path}
              handle={children.handle}
              path={children.path}
              element={children.element}
            />
          ))}
        </Route>
      );
    }
  );

  return createBrowserRouter(
    createRoutesFromElements([
      <Route
        path="/"
        element={
          <React.Suspense fallback={<Layout />}>
            <Layout>
              <Outlet />
            </Layout>
          </React.Suspense>
        }
      >
        {unprotectedRoutes}
      </Route>,
    ])
  );
}
