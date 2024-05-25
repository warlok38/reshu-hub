import React from 'react';
import './styles/index.scss';
import { RouterProvider, ThemeProvider } from './providers';
import './i18n';
import { Provider } from 'react-redux';
import store from 'shared/store';
import { SnackbarProvider } from 'notistack';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { ruRU } from '@mui/x-date-pickers/locales';
import 'dayjs/locale/ru';

export function App() {
  return (
    <ThemeProvider>
      <SnackbarProvider>
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          adapterLocale="ru"
          localeText={
            ruRU.components.MuiLocalizationProvider.defaultProps.localeText
          }
        >
          <Provider store={store}>
            <RouterProvider />
          </Provider>
        </LocalizationProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}
