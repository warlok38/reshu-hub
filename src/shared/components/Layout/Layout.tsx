import React from 'react';
import { PageWrap } from 'shared/components/PageWrap';
import * as S from './Layout.styled';
import { Header } from 'widgets/header';
import { Footer } from 'widgets/footer';
import { GlobalLoader } from '../GlobalLoader';

type LayoutProps = {
  children?: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <S.Wrapper>
      <Header />
      <PageWrap>{children || <GlobalLoader />}</PageWrap>
      <Footer />
    </S.Wrapper>
  );
}
