import React from 'react';
import { NavMenu } from 'entities/navMenu';
import { Logo } from 'shared/components/Logo';
import * as S from './styled';
import { LoginButton } from 'features/auth/login';
import { Stack } from '@mui/material';
import { AddButton } from 'features/add';
import { useScreen } from 'shared/hooks/useScreen';

export function Header() {
  const { isSmallScreen } = useScreen();

  return (
    <S.Wrapper>
      <S.Content>
        <Stack
          direction="row"
          spacing={isSmallScreen ? 2 : 8}
          alignItems="center"
        >
          {isSmallScreen && <NavMenu />}
          <Logo variant={isSmallScreen ? 'small' : 'primary'} />
          {!isSmallScreen && <NavMenu />}
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
