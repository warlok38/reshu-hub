import React from 'react';
import * as S from './styled';
import { Icons } from '../../../shared/icons';

const Contacts = () => {
  return (
    <S.Contacts>
      <S.Info_items>
        <h4>Конктакты</h4>
      </S.Info_items>
      <S.Info_items>
        <Icons src="phone" />
        <p>Телефон: 8(888) 88-88-88</p>
      </S.Info_items>
      <S.Info_items>
        <Icons src="email" />
        <p>Почта: info@sibsau.ru</p>
      </S.Info_items>
      <S.Info_items>
        <Icons src="location" />
        <p>
          660037, Сибирский федеральный округ, Красноярский край, г. Красноярск,
          проспект им. газеты Красноярский рабочий, 31, проспект Мира, 82
        </p>
      </S.Info_items>
    </S.Contacts>
  );
};

export default Contacts;
