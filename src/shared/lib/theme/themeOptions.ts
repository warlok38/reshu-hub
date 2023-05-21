import { CssVarsThemeOptions } from '@mui/material/styles/experimental_extendTheme';
import { colors } from './common/colors';
import 'styled-components';

const { white, orange, red, blue1, blue2, grey1, grey2, grey3 } = colors;

export const themeOptions: CssVarsThemeOptions = {
  spacing: 4,
  breakpoints: {
    values: {
      xs: 428,
      sm: 1024,
      md: 1263,
      lg: 1440,
      xl: 1920,
    },
  },
  colorSchemes: {
    light: {
      palette: {
        text: {
          primary: grey1,
          secondary: white,
          disabled: grey3,
        },
        background: {
          default: white,
        },
        primary: {
          main: orange,
          light: red,
        },
        secondary: {
          main: blue2,
        },
      },
    },
  },
};
