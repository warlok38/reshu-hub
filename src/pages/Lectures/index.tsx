import React from 'react';
import * as S from './styled';
import { TitleWrapper } from './TitleWrapper';
import { TagsWrapper } from './TagsWrapper';
import { WrapperCards } from './WrapperCards';

function LecturesPage() {
  return (
    <S.Wrapper>
      <TitleWrapper />
      <TagsWrapper />
      <WrapperCards />
    </S.Wrapper>
  );
}

export default LecturesPage;
