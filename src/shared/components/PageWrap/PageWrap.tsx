import React from 'react';
import * as S from './PageWrap.styled';

type PageWrapProps = {
  children?: React.ReactNode;
};

export function PageWrap({ children }: PageWrapProps) {
  return <S.Wrapper>{children}</S.Wrapper>;
}
