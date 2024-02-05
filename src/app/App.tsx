import React from 'react';
import './styles/index.scss';
import { RouterProvider, ThemeProvider } from './providers';
import './i18n';
import { Provider } from 'react-redux';
import store from 'shared/store';

export function App() {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider />
      </Provider>
    </ThemeProvider>
  );
}
