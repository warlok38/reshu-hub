import { experimental_extendTheme as extendTheme } from '@mui/material/styles';
import { CssVarsThemeOptions } from '@mui/material/styles/experimental_extendTheme';

type CreateThemeOptions = {
  themeOptions: CssVarsThemeOptions;
};

export function createTheme({
  themeOptions,
}: CreateThemeOptions): ReturnType<typeof extendTheme> {
  const theme = extendTheme(themeOptions);

  return theme;
}
