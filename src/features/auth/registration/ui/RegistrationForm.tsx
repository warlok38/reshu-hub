import React from 'react';
import { Box, Divider, Stack, TextField } from '@mui/material';
import { PasswordInput } from 'shared/components/Input';
import * as S from 'features/auth/styled';
import { useRegistration } from 'features/auth/hooks/useRegistration';

export const RegistrationForm = () => {
  const { form, onSubmit, isLoading } = useRegistration();

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  return (
    <S.Wrapper elevation={4}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          direction="column"
          spacing={6}
        >
          <S.Title>Регистрация</S.Title>
          <TextField
            {...register('middleName', { required: 'Обязательное поле' })}
            error={!!errors.middleName}
            helperText={errors.middleName?.message}
            type="text"
            label="Фамилия"
            variant="outlined"
          />
          <TextField
            {...register('firsName', { required: 'Обязательное поле' })}
            error={!!errors.firsName}
            helperText={errors.firsName?.message}
            type="text"
            label="Имя"
            variant="outlined"
          />
          <TextField
            {...register('lastName', { required: 'Обязательное поле' })}
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
            type="text"
            label="Отчество"
            variant="outlined"
          />
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
          <PasswordInput
            {...register('passwordConfirm', {
              required: 'Обязательное поле',
              validate: (value, { password }) => {
                if (value !== password) {
                  return 'Пароли не совпадают';
                }

                return true;
              },
            })}
            error={!!errors.passwordConfirm}
            helperText={errors.passwordConfirm?.message}
            label="Подтвердите пароль"
            autoComplete="off"
            placeholder="Подтвердите пароль"
          />

          {/* <FormControlLabel
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
          /> */}
          <Box textAlign="center">
            <S.StyledButton
              type="submit"
              variant="contained"
              color="secondary"
              loading={isLoading}
            >
              Зарегистрироваться
            </S.StyledButton>
          </Box>
          <Divider sx={{ opacity: 0.5 }} />
          <S.StyledLink to="/login">Войти</S.StyledLink>
          <S.StyledLink to="/">Отмена</S.StyledLink>
        </Stack>
      </form>
    </S.Wrapper>
  );
};
