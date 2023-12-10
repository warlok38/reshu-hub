import React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';

export const LoginButton = () => {
  const navigate = useNavigate();

  return (
    <S.LoginButton
      onClick={() => navigate('/login')}
      startIcon={<LoginIcon fontSize="inherit" />}
    >
      Войти
    </S.LoginButton>
  );
};
