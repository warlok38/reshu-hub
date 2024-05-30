import React from 'react';
import { LoadingButton } from '@mui/lab';
import { useLogout } from 'features/auth/hooks/useLogout';

export const LogoutButton = () => {
  const { onLogout, isLoading } = useLogout();

  return (
    <LoadingButton
      variant="contained"
      color="secondary"
      loading={isLoading}
      sx={{ py: 1, px: 4, borderRadius: 20, textTransform: 'uppercase' }}
      onClick={onLogout}
    >
      Выйти
    </LoadingButton>
  );
};
