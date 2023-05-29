import { CssVarsThemeOptions } from '@mui/material/styles/experimental_extendTheme';
import { colors } from './common/colors';
import 'styled-components';

const { gray, orange, red, blue } = colors;

export const themeOptions: CssVarsThemeOptions = {
  spacing: 4,
  breakpoints: {
    values: {
      xs: 320,
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
          primary: gray[1],
          secondary: gray[2],
          disabled: gray[3],
        },
        background: {
          default: gray[0],
        },
        primary: {
          main: orange[1],
          contrastText: gray[0],
        },
        primaryLighter: {
          main: orange[2],
        },
        secondary: {
          main: blue[2],
        },
        accent: {
          main: red[1],
        },
      },
    },
  },
};

declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary'];
    primaryLighter: Palette['primary'];
  }
  interface PaletteOptions {
    accent?: PaletteOptions['primary'];
    primaryLighter: PaletteOptions['primary'];
  }
}
