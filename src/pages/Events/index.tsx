import React from 'react';
import * as S from './styled';
import Tabs from './Tabs';
import Tags from './TagsWraper';
import Grid from './Grid';
import Button from './Button';
import TitleWrapper from './TitleWrapper';
import CarouselWrapper from './CarouselWrapper';

function EventsPage() {
  return (
    <S.Wrapper>
      {/* <S.WrapperCarousel /> */}
      <CarouselWrapper />
      <TitleWrapper />
      <Tabs />
      <Tags />
      <Grid />
      <Button />
    </S.Wrapper>
  );
}

export default EventsPage;
