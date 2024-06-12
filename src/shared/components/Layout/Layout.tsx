import React from 'react';
import { PageWrap } from 'shared/components/PageWrap';
import * as S from './Layout.styled';
import { Header } from 'widgets/header';
import { Footer } from 'widgets/footer';
import { GlobalLoader } from '../GlobalLoader';
import { useAuth } from 'features/auth/hooks/useAuth';
import { useMount } from 'react-use';

type LayoutProps = {
  children?: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  const { auth, isLoading, initApp } = useAuth();

  useMount(() => {
    initApp();
  });

  return (
    <S.Wrapper>
      <Header
        user={auth.user}
        isAuthenticated={auth.isAuthenticated}
        isLoading={isLoading}
      />
      <PageWrap>{children || <GlobalLoader />}</PageWrap>
      <Footer />
    </S.Wrapper>
  );
}
