import React from 'react';
import * as S from './styled';
import { CarouselWrapper } from './CarouselWrapper';
import { BlockInfo } from './BlockInfo';

function DetaliPage() {
  return (
    <S.Wrapper>
      <CarouselWrapper />
      <BlockInfo />
      <BlockInfo />
      <BlockInfo />
    </S.Wrapper>
  );
}

export default DetaliPage;
