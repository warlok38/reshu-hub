import React from 'react';
import { NavBar } from 'entities/navBar';
import { Logo } from 'shared/components/Logo';
import * as S from './styled';

export function Header() {
  return (
    <S.Wrapper>
      <S.Content>
        <Logo />
        <NavBar />
      </S.Content>
    </S.Wrapper>
  );
}
