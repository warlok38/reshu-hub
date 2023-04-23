import React from 'react';
import * as S from './styled';
import { ColorTabs } from './Tabs';
import { TagsChip } from './TagsWraper';
import { WrapperCards } from './Grid';
import { ButtonMore } from './Button';
import { TitleWrapper } from './TitleWrapper';
import { Carousel } from './CarouselWrapper';

function EventsPage() {
  return (
    <S.Wrapper>
      <Carousel />
      <TitleWrapper />
      <ColorTabs />
      <TagsChip />
      <WrapperCards />
      <ButtonMore />
    </S.Wrapper>
  );
}

export default EventsPage;
