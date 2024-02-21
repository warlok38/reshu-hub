import React from 'react';
import { NavBar } from 'entities/navBar';
import { Logo } from 'shared/components/Logo';
import * as S from './styled';
import { LoginButton } from 'features/auth/login';
import { Button, Stack } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';

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
          <Button
            variant="contained"
            color="secondary"
            size="small"
            sx={{ borderRadius: 50, minWidth: 0, width: 32 }}
          >
            <AddOutlined />
          </Button>
          <LoginButton />
        </Stack>
      </S.Content>
    </S.Wrapper>
  );
}
