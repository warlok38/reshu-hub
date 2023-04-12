import React from 'react';
import { NavBar } from 'entities/navBar';
import * as S from './styled';
import { Icons } from 'shared/icons';

export function Header() {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Logo>
          <Icons src="logo" />
        </S.Logo>
        <NavBar />
      </S.Content>
    </S.Wrapper>
  );
}
