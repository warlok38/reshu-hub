import { useMediaQuery, useTheme } from '@mui/material';

export function useScreen() {
  const { breakpoints } = useTheme();

  const screens = {
    isSmallScreen: useMediaQuery(breakpoints.down('sm')),
  };

  return {
    ...screens,
  };
}
