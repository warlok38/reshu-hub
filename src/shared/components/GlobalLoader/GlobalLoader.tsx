import React from 'react';
import SVG from 'react-inlinesvg';
import rocketIcon from './rocket.svg';
import * as S from './GlobalLoader.styled';

export function GlobalLoader() {
  return (
    <S.Wrapper>
      <S.LoaderContainer>
        <SVG src={rocketIcon} />
      </S.LoaderContainer>
    </S.Wrapper>
  );
}
