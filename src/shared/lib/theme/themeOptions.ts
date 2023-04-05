import { CssVarsThemeOptions } from '@mui/material/styles/experimental_extendTheme';
import { colors } from './common/colors';
import 'styled-components';

const { white, orange, red, blue, darkBlue } = colors;

export const themeOptions: CssVarsThemeOptions = {
  spacing: 4,
  breakpoints: {
    values: {
      xs: 428,
      sm: 1024,
      md: 1263,
      lg: 1519,
      xl: 1920,
    },
  },
  colorSchemes: {
    light: {
      palette: {
        background: {
          default: white,
        },
        primary: {
          main: orange,
          light: orange,
          dark: red,
        },
        secondary: {
          main: blue,
          light: darkBlue,
          dark: blue,
        },
      },
    },
  },
};
