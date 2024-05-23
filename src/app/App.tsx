import React from 'react';
import './styles/index.scss';
import { RouterProvider, ThemeProvider } from './providers';
import './i18n';
import { Provider } from 'react-redux';
import store from 'shared/store';
import { SnackbarProvider } from 'notistack';

export function App() {
  return (
    <ThemeProvider>
      <SnackbarProvider>
        <Provider store={store}>
          <RouterProvider />
        </Provider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}
