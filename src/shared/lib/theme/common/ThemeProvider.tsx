import React, { useRef } from 'react';
import { CacheProvider, Global, SerializedStyles } from '@emotion/react';
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
} from '@mui/material/styles';
import createCache from '@emotion/cache';
import { CssBaseline } from '@mui/material';

type ThemeProviderProps = {
  cacheKey: string;
  cachePrepand?: boolean;
  theme: ReturnType<typeof extendTheme>;
  appStyles?: SerializedStyles;
  children: React.ReactNode;
  defaultColorScheme: 'dark' | 'light';
};

export function ThemeProvider({
  cacheKey,
  cachePrepand,
  theme,
  appStyles,
  children,
  defaultColorScheme,
}: ThemeProviderProps) {
  const cache = useRef(
    createCache({ key: cacheKey.toLowerCase(), prepend: cachePrepand })
  );

  return (
    <CacheProvider value={cache.current}>
      <CssVarsProvider
        theme={theme}
        defaultColorScheme={defaultColorScheme}
      >
        <CssBaseline />
        {children}
      </CssVarsProvider>
      {appStyles !== null && <Global styles={appStyles} />}
    </CacheProvider>
  );
}
