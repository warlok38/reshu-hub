import React from 'react';
import * as S from './styled';
import { Icons } from 'shared/icons';
import { Typography } from '@mui/material';

export const Contacts = () => {
  return (
    <S.Contacts>
      <S.TextContainer>
        <Typography component="h5">Контакты</Typography>
      </S.TextContainer>
      <S.TextContainer>
        <Icons src="phone" />
        <Typography component="p">Телефон: 8(888) 88-88-88</Typography>
      </S.TextContainer>
      <S.TextContainer>
        <Icons src="email" />
        <Typography component="p">Почта: info@sibsau.ru</Typography>
      </S.TextContainer>
      <S.TextContainer>
        <Icons src="location" />
        <Typography component="p">
          660037, Сибирский федеральный округ, Красноярский край, г. Красноярск,
          проспект им. газеты Красноярский рабочий, 31, проспект Мира, 82
        </Typography>
      </S.TextContainer>
    </S.Contacts>
  );
};
