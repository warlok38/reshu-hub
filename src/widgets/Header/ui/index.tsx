import React from 'react';
import { NavBar } from 'entities/navBar';
import * as S from './styled';

export function Header() {
  return (
    <S.Wrapper>
      <NavBar />
    </S.Wrapper>
  );
}
