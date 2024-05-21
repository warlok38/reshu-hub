import React from 'react';
import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  Stack,
  TextField,
} from '@mui/material';
import * as S from 'features/auth/styled';
import { PasswordInput } from 'shared/components/Input';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

type LoginFormValues = {
  login: string;
  password: string;
  rememberMe: boolean;
};

export const LoginForm = () => {
  const { handleSubmit, control, register } = useForm<LoginFormValues>();

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    console.log('form data', data);
  };

  return (
    <S.Wrapper elevation={4}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          direction="column"
          spacing={6}
        >
          <S.Title>Вход на сайт</S.Title>
          <Controller
            name="login"
            control={control}
            rules={{
              required: 'Обязательное поле',
            }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                error={!!error}
                type="text"
                label="Логин"
                variant="outlined"
                helperText={error ? error.message : null}
                {...field}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{
              required: 'Обязательное поле',
            }}
            render={({ field, fieldState: { error } }) => (
              <PasswordInput
                error={!!error}
                label="Пароль"
                autoComplete="off"
                helperText={error ? error.message : null}
                {...field}
              />
            )}
          />
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <FormControlLabel
              control={<Checkbox name="rememberMe" />}
              label="Запомнить меня"
              slotProps={{ typography: { fontSize: '14px' } }}
              {...register('rememberMe')}
            />
            <S.StyledLink
              to="/password-recovery"
              sx={{ fontSize: '14px', fontWeight: 400 }}
            >
              Забыли пароль ?
            </S.StyledLink>
          </Stack>
          <Box textAlign="center">
            <S.StyledButton
              type="submit"
              variant="contained"
              color="secondary"
            >
              Войти
            </S.StyledButton>
          </Box>
          <Divider />
          <S.StyledLink to="/registration">Зарегистрироваться</S.StyledLink>
          <S.StyledLink to="/">Отмена</S.StyledLink>
        </Stack>
      </form>
    </S.Wrapper>
  );
};
