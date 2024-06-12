import { authActions } from 'entities/auth';
import { useEffect } from 'react';
import { useLazyLogoutQuery } from 'shared/api/auth/authApi';
import { useAppDispatch } from 'shared/store';
import { refreshToken } from 'shared/utils/refreshToken';

export function useLogout() {
  const [logout, { isFetching, isSuccess, error }] = useLazyLogoutQuery();
  const dispatch = useAppDispatch();

  const logoutHandler = () => {
    logout();
  };

  useEffect(() => {
    if (isSuccess) {
      refreshToken.removeToken();
      dispatch(authActions.loginFailed());
    }
  }, [dispatch, isSuccess]);

  useEffect(() => {
    if (error) {
      refreshToken.removeToken();
      dispatch(authActions.loginFailed());
    }
  }, [dispatch, error]);

  return {
    isLoading: isFetching,
    onLogout: logoutHandler,
  };
}
