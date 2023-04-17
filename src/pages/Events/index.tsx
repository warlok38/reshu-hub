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
      <S.Events>Мероприятия</S.Events>
      <Tabs />
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
    </S.Wrapper>
  );
}

export default EventsPage;
