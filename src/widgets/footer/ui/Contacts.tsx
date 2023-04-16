import React from 'react';
import * as S from './styled';
import { Icons } from 'shared/icons';

const Contacts = () => {
  return (
    <S.Contacts>
      <S.Contacts_item>
        <h4>Конктакты</h4>
      </S.Contacts_item>
      <S.Contacts_item>
        <Icons src="phone" />
        <p>Телефон: 8(888) 88-88-88</p>
      </S.Contacts_item>
      <S.Contacts_item>
        <Icons src="email" />
        <p>Почта: info@sibsau.ru</p>
      </S.Contacts_item>
      <S.Contacts_item>
        <Icons src="location" />
        <p>
          660037, Сибирский федеральный округ, Красноярский край, г. Красноярск,
          проспект им. газеты Красноярский рабочий, 31, проспект Мира, 82
        </p>
      </S.Contacts_item>
    </S.Contacts>
  );
};

export default Contacts;
