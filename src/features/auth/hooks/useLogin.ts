import { authActions } from 'entities/auth';
import { enqueueSnackbar } from 'notistack';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useLoginMutation } from 'shared/api/auth/authApi';
import { LoginParams } from 'shared/models/params/auth/login';
import { useAppDispatch } from 'shared/store';
import { accessToken } from 'shared/utils/accessToken';

export function useLogin() {
  const [login, { data, originalArgs, isLoading, isSuccess, error }] =
    useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const form = useForm<LoginParams>();

  const submitHandler = (values: LoginParams) => {
    login(values);
  };

  useEffect(() => {
    if (isSuccess && data && originalArgs) {
      accessToken.setToken(data.token);

      dispatch(authActions.setAuthenticated(true));
      navigate('/');
    }
  }, [data, isSuccess, originalArgs, navigate, dispatch]);

  useEffect(() => {
    if (error) {
      dispatch(authActions.setAuthenticated(false));

      enqueueSnackbar(error?.message || 'Ошибка при регистрации', {
        variant: 'error',
        autoHideDuration: 3000,
      });
    }
  }, [error, dispatch]);

  return {
    form,
    isLoading,
    onSubmit: submitHandler,
  };
}
