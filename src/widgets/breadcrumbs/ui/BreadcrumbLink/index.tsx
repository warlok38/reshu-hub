import React, { PropsWithChildren } from 'react';
import { NavLinkProps } from 'react-router-dom';
import * as S from './styled';

export const BreadcrumbLink = (props: PropsWithChildren<NavLinkProps>) => {
  return <S.Wrapper {...props}>{props.children}</S.Wrapper>;
};
