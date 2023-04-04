import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'shared/models';
import * as S from './styled';

function NotFound() {
  return (
    <S.Wrapper>
      <S.Title>Страница не найдена :(</S.Title>
      <Link
        to={routes.news.path}
        style={{ fontSize: 24 }}
      >
        Вернуться на главную
      </Link>
    </S.Wrapper>
  );
}

export default NotFound;
