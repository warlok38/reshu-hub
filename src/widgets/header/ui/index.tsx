import React from 'react';
import { NavMenu } from 'entities/navMenu';
import { Logo } from 'shared/components/Logo';
import * as S from './styled';
import { LoginButton } from 'features/auth/login';
import { Skeleton, Stack } from '@mui/material';
import { useScreen } from 'shared/hooks/useScreen';
import { UserAccount } from 'entities/userAccount';
import { UserEntity } from 'shared/models/api/user/user';

type HeaderProps = {
  user: UserEntity | null;
  isAuthenticated: boolean;
  isLoading: boolean;
};

export function Header({ user, isAuthenticated, isLoading }: HeaderProps) {
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
          {isLoading ? (
            <Skeleton
              variant="circular"
              sx={{ padding: '5px' }}
              width={isSmallScreen ? 32 : 40}
              height={isSmallScreen ? 32 : 40}
            />
          ) : isAuthenticated && user ? (
            <UserAccount user={user} />
          ) : (
            <LoginButton />
          )}
        </Stack>
      </S.Content>
    </S.Wrapper>
  );
}
