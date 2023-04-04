import React, { PropsWithChildren } from 'react';
import { LinkProps } from 'react-router-dom';
import * as S from './Link.styled';

export const Link = (props: PropsWithChildren<LinkProps>) => {
  return <S.Wrapper {...props}>{props.children}</S.Wrapper>;
};
