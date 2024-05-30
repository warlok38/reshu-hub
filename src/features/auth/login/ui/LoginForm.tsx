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
import { useLogin } from 'features/auth/hooks/useLogin';

export const LoginForm = () => {
  const { form, onSubmit, isLoading } = useLogin();

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  return (
    <S.Wrapper elevation={4}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          direction="column"
          spacing={6}
        >
          <S.Title>Вход на сайт</S.Title>
          <TextField
            {...register('email', { required: 'Обязательное поле' })}
            error={!!errors.email}
            helperText={errors.email?.message}
            type="email"
            label="Почта (логин)"
            variant="outlined"
            placeholder="Введите email"
          />
          <PasswordInput
            {...register('password', { required: 'Обязательное поле' })}
            error={!!errors.password}
            helperText={errors.password?.message}
            label="Пароль"
            autoComplete="off"
            placeholder="Введите пароль"
          />
          {/* <Stack
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
          </Stack> */}
          <Box textAlign="center">
            <S.StyledButton
              type="submit"
              variant="contained"
              color="secondary"
              loading={isLoading}
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
