import React from 'react';
import * as S from './styled';
import { EventStatusTabs } from './EventStatusTabs';
import { TagsWraper } from './TagsWraper';
import { WrapperCards } from './WrapperCards';
import { ButtonMore } from './ButtonMore';
import { TitleWrapper } from './TitleWrapper';
import { CarouselWrapper } from './CarouselWrapper';

function EventsPage() {
  return (
    <S.Wrapper>
      <CarouselWrapper />
      <TitleWrapper />
      <EventStatusTabs />
      <TagsWraper />
      <WrapperCards />
      <ButtonMore />
    </S.Wrapper>
  );
}

export default EventsPage;
