import React from 'react';
import { publicRoutes } from './routes';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  ScrollRestoration,
} from 'react-router-dom';
import { Layout } from 'shared/components/Layout';
import { adminRoutes } from './adminRoutes';

import { useRoles } from 'shared/hooks/useRoles';

const Registration = React.lazy(() => import('pages/Registration'));
const Login = React.lazy(() => import('pages/Login'));

export function useGetRouter() {
  const { hasRoles } = useRoles(['admin', 'teacher']);

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
  const protectedRoutes = hasRoles
    ? adminRoutes.map(({ index, path, element, handle, children }) => {
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
      })
    : [];

  return createBrowserRouter(
    createRoutesFromElements([
      <Route
        key="/"
        path="/"
        element={
          <React.Suspense fallback={<Layout />}>
            <Layout>
              <ScrollRestoration />
              <Outlet />
            </Layout>
          </React.Suspense>
        }
      >
        {/* TODO зарефачить после добавление админки */}
        {[...unprotectedRoutes, ...protectedRoutes]}
      </Route>,
      <Route
        key="/login"
        path="/login"
        element={
          <React.Suspense>
            <Login />
          </React.Suspense>
        }
      />,
      <Route
        key="/registration"
        path="/registration"
        element={
          <React.Suspense>
            <Registration />
          </React.Suspense>
        }
      />,
    ])
  );
}
