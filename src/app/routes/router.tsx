import React from 'react';
import { publicRoutes } from './routes';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { Layout } from 'shared/components/Layout';
import { Header } from 'widgets/header';

export function getRouter() {
  const unprotectedRoutes = publicRoutes.map(({ index, path, element }) => {
    return (
      <Route
        key={path}
        path={path}
        element={
          <React.Suspense fallback={'...загрузка'}>{element}</React.Suspense>
        }
        index={index}
      />
    );
  });

  return createBrowserRouter(
    createRoutesFromElements([
      <Route
        path="/"
        element={
          <React.Suspense fallback={'...загрузка'}>
            <Layout>
              <Header />
            </Layout>
          </React.Suspense>
        }
      >
        {unprotectedRoutes}
      </Route>,
    ])
  );
}
