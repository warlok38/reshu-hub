import { authActions } from 'entities/auth';
import { useEffect } from 'react';
import { useLazyLogoutQuery } from 'shared/api/auth/authApi';
import { useAppDispatch } from 'shared/store';
import { accessToken } from 'shared/utils/accessToken';

export function useLogout() {
  const [logout, { isFetching, isSuccess, error }] = useLazyLogoutQuery();
  const dispatch = useAppDispatch();

  const logoutHandler = () => {
    logout();
  };

  useEffect(() => {
    if (isSuccess) {
      accessToken.removeToken();
      dispatch(authActions.setAuthenticated(false));
    }
  }, [dispatch, isSuccess]);

  useEffect(() => {
    if (error) {
      accessToken.removeToken();
      dispatch(authActions.setAuthenticated(false));
    }
  }, [dispatch, error]);

  return {
    isLoading: isFetching,
    onLogout: logoutHandler,
  };
}
