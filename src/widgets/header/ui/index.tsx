import React from 'react';
import { NavBar } from 'entities/navBar';
import { Logo } from 'shared/components/Logo';
import * as S from './styled';
import { LoginButton } from 'features/auth/login';
import { Button, Stack } from '@mui/material';
import { AddButton } from 'features/add';

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
        <Stack
          direction="row"
          spacing={4}
          alignItems="center"
        >
          <AddButton />
          <LoginButton />
        </Stack>
      </S.Content>
    </S.Wrapper>
  );
}
