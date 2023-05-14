import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import * as S from './styled';

function NotFound() {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.Title>Страница не найдена :(</S.Title>
      <Button
        onClick={() => navigate(-1)}
        variant="text"
      >
        Нажмите, чтобы вернуться
      </Button>
    </S.Wrapper>
  );
}

export default NotFound;
