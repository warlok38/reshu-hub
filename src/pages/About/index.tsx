import React from 'react';
import * as S from './styled';
import { Banner } from './Components/Banner';
import { Target } from './Components/Target';
import { Cards } from './Components/Cards';


function AboutPage() {
  return (
    <S.Wrapper>
      <Banner />
      <Target />
      <Cards />
    </S.Wrapper>
  );
}

export default AboutPage;
