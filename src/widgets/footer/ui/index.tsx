import React from 'react';
import * as S from './styled';
import Contacts from './Contacts';

const Footer = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <Contacts />
        <S.Logo />
      </S.Content>
    </S.Wrapper>
  );
};

export default Footer;
