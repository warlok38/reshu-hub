import React from 'react';
import { NavBar } from 'entities/navBar';
import { Logo } from 'shared/components/Logo';
import * as S from './styled';
import { LoginButton } from 'features/auth/login';
import { Stack } from '@mui/material';

export function Header() {
  return (
    <S.Wrapper>
      <S.Content>
        <Stack
          direction="row"
          spacing={8}
          alignItems="center"
        >
          <Logo />
          <NavBar />
        </Stack>
        <LoginButton />
      </S.Content>
    </S.Wrapper>
  );
}
