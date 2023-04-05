import React from 'react';
import { ThemeProvider as TThemeProvider, mainTheme } from 'shared/lib/theme';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

type ThemeProviderProps = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <TThemeProvider
      theme={mainTheme}
      cacheKey="rh-prefix-key"
      defaultColorScheme="light"
    >
      <StyledThemeProvider theme={mainTheme}>{children}</StyledThemeProvider>
    </TThemeProvider>
  );
}
