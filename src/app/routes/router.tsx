import React from 'react';
import { publicRoutes } from './routes';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { Layout } from 'shared/components/Layout';
import { Header } from 'widgets/header';
import { Footer } from 'widgets/footer';

export function getRouter() {
  const unprotectedRoutes = publicRoutes.map(
    ({ index, path, element, children }) => {
      return index ? (
        <Route
          index={index}
          key={path}
          element={
            <React.Suspense fallback={'...загрузка'}>{element}</React.Suspense>
          }
        />
      ) : (
        <Route
          key={path}
          path={path}
          element={
            <React.Suspense fallback={'...загрузка'}>{element}</React.Suspense>
          }
        >
          {children?.map((children) => (
            <Route
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
          <React.Suspense fallback={'...загрузка'}>
            <Layout
              footer={<Footer />}
              header={<Header />}
            />
          </React.Suspense>
        }
      >
        {unprotectedRoutes}
      </Route>,
    ])
  );
}
