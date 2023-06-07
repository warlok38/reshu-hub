import React from 'react';
import * as S from './styled';
import { Contacts } from './Contacts';
import { Logo } from 'shared/components/Logo';

export const Footer = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <Contacts />
        <Logo variant="secondary" />
      </S.Content>
    </S.Wrapper>
  );
};
