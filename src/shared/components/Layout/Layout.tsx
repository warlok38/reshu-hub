import React from 'react';
import { Outlet } from 'react-router-dom';
import { PageWrap } from 'shared/components/PageWrap';
import * as S from './Layout.styled';

type LayoutProps = {
  header?: React.ReactNode;
  footer?: React.ReactNode;
};

export function Layout({ header, footer }: LayoutProps) {
  return (
    <S.Wrapper>
      {header}
      <PageWrap>
        <Outlet />
      </PageWrap>
      {footer}
    </S.Wrapper>
  );
}
