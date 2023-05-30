import { createTheme } from './utils/createTheme';
import { themeOptions } from './themeOptions';
import { styleOverrides } from './style-overrides';
import { componentPropsOverrides } from './props-overrides';

export const mainTheme = createTheme({
  themeOptions,
  styleOverrides,
  componentVariants: componentPropsOverrides,
});
