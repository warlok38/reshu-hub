import React from 'react';
import { Link } from 'shared/components/Link';
import { routes } from 'shared/models';
import * as S from './NavBar.styled';

export function NavBar() {
  return (
    <S.Wrapper>
      {Object.values(routes).map(({ name, path }) => (
        <Link
          key={path}
          to={path}
        >
          {name}
        </Link>
      ))}
    </S.Wrapper>
  );
}
