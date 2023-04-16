import React from 'react';
import * as S from './styled';
import Contacts from './Contacts';

const Footer = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <Contacts />
        <S.Info_items>
          <S.Logo />
        </S.Info_items>
      </S.Content>
    </S.Wrapper>
  );
};

export default Footer;
