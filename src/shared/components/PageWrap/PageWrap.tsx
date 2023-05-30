import React from 'react';
import * as S from './PageWrap.styled';
import { Breadcrumbs } from 'widgets/breadcrumbs';

type PageWrapProps = {
  children?: React.ReactNode;
};

export function PageWrap({ children }: PageWrapProps) {
  return (
    <S.Wrapper>
      <Breadcrumbs />
      {children}
    </S.Wrapper>
  );
}
