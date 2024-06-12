import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLazyInitQuery } from 'shared/api/auth/authApi';
import { RootState, useAppDispatch } from 'shared/store';
import { refreshToken } from 'shared/utils/refreshToken';
import { authActions } from 'entities/auth';

export function useAuth() {
  const [init, { currentData, isSuccess, isFetching, error }] =
    useLazyInitQuery();

  const authState = useSelector(({ auth }: RootState) => auth);
  const dispatch = useAppDispatch();

  const initApp = useCallback(() => {
    if (!!refreshToken.getToken() && !authState.isAuthenticated) {
      init();
      return;
    }

    dispatch(authActions.loginFailed());
  }, [authState.isAuthenticated, init, dispatch]);

  useEffect(() => {
    if (isSuccess && currentData) {
      dispatch(
        authActions.loginSuccess({
          isAuthenticated: true,
          user: currentData.user,
        })
      );
    }
  }, [currentData, isSuccess, dispatch]);

  useEffect(() => {
    if (!!error) {
      dispatch(authActions.loginFailed());
    }
  }, [dispatch, error]);

  return {
    auth: authState,
    isLoading: isFetching || authState.isLoading,
    initApp,
  };
}
