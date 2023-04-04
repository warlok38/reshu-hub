import React from 'react';
import { Outlet } from 'react-router-dom';
import { PageWrap } from 'shared/components/PageWrap';
import * as S from './Layout.styled';

type LayoutProps = {
  children?: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <S.Wrapper>
      {children}
      <PageWrap>
        <Outlet />
      </PageWrap>
    </S.Wrapper>
  );
}
