import React from 'react';
import * as S from './styled';
import { StyledEngineProvider } from '@mui/material/styles';
import Breadcrumbs from './Breadcrumbs';
import Tabs from './Tabs';
import Card from './Card';

function EventsPage() {
  return (
    <S.Wrapper>
      <Breadcrumbs />
      <S.WrapperCarusel></S.WrapperCarusel>
      <S.Eventsdiv>
        <S.Events>Мероприятия</S.Events>{' '}
      </S.Eventsdiv>

      <Tabs />
      <S.Teg>
        <S.TegText>Теги:</S.TegText>
        <S.TegButton>
          <S.TegButtonA>Все теги</S.TegButtonA>
        </S.TegButton>
        <S.TegActiveButton>
          <S.TegActiveButtonA>Выставка</S.TegActiveButtonA>
        </S.TegActiveButton>
        <S.TegActiveButton>
          <S.TegActiveButtonA>Конкурс</S.TegActiveButtonA>
        </S.TegActiveButton>
        <S.TegButton>
          <S.TegButtonA>Концерт</S.TegButtonA>
        </S.TegButton>
        <S.TegButton>
          <S.TegButtonA>Круглый стол</S.TegButtonA>
        </S.TegButton>
        <S.TegButton>
          <S.TegButtonA>Мастер класс</S.TegButtonA>
        </S.TegButton>
        <S.TegButton>
          <S.TegButtonA>Олимпиада</S.TegButtonA>
        </S.TegButton>
        <S.TegButton>
          <S.TegButtonA>Открытая лекция</S.TegButtonA>
        </S.TegButton>
      </S.Teg>
      <S.containerEvents>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </S.containerEvents>
      <S.ButtonMorediv>
        <S.ButtonMore>
          <S.ButtonMoreA>БОЛЬШЕ МЕРОПРИЯТИЙ</S.ButtonMoreA>
        </S.ButtonMore>
      </S.ButtonMorediv>
    </S.Wrapper>
  );
}

export default EventsPage;
