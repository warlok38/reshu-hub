import React from 'react';
import './styles/index.scss';
import { RouterProvider, ThemeProvider } from './providers';

export function App() {
  return (
    <ThemeProvider>
      <RouterProvider />
    </ThemeProvider>
  );
}
