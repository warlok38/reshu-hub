import React from 'react';
import {
  Box,
  Checkbox,
  Divider,
  FormControlLabel,
  Stack,
  TextField,
} from '@mui/material';
import { PasswordInput } from 'shared/components/Input';
import * as S from 'features/auth/styled';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

type RegistrationFormValues = {
  login: string;
  email: string;
  password: string;
  passwordConfirm: string;
  mailing: boolean;
  rememberMe: boolean;
};

export const RegistrationForm = () => {
  const { handleSubmit, control, register } = useForm<RegistrationFormValues>();

  const onSubmit: SubmitHandler<RegistrationFormValues> = (data) => {
    console.log('form data', data);
  };

  return (
    <S.Wrapper elevation={4}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          direction="column"
          spacing={6}
        >
          <S.Title>Регистрация</S.Title>
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
            name="email"
            control={control}
            rules={{
              required: 'Обязательное поле',
            }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                error={!!error}
                type="email"
                label="Почта"
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
          <Controller
            name="passwordConfirm"
            control={control}
            rules={{
              required: 'Обязательное поле',
              validate: (value, { password }) => {
                if (value !== password) {
                  return 'Пароли не совпадают';
                }

                return true;
              },
            }}
            render={({ field, fieldState: { error } }) => (
              <PasswordInput
                error={!!error}
                label="Подтвердите пароль"
                autoComplete="off"
                helperText={error ? error.message : null}
                {...field}
              />
            )}
          />
          <FormControlLabel
            control={<Checkbox name="mailing" />}
            label="Получать на почту новые уроки и полезные материалы от ReshUHub"
            slotProps={{ typography: { fontSize: '14px' } }}
            {...register('mailing')}
          />
          <FormControlLabel
            control={<Checkbox name="rememberMe" />}
            label="Запомнить меня"
            slotProps={{ typography: { fontSize: '14px' } }}
            {...register('rememberMe')}
          />
          <Box textAlign="center">
            <S.StyledButton
              type="submit"
              variant="contained"
            >
              Зарегистрироваться
            </S.StyledButton>
          </Box>
          <Divider sx={{ opacity: 0.5 }} />
          <S.StyledLink to="/login">Войти</S.StyledLink>
        </Stack>
      </form>
    </S.Wrapper>
  );
};
