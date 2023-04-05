import React from 'react';
import './styles/index.scss';
import { RouterProvider, ThemeProvider } from './providers';
import './i18n';

export function App() {
  return (
    <ThemeProvider>
      <RouterProvider />
    </ThemeProvider>
  );
}
