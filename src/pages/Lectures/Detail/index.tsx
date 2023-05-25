import React from 'react';
import { CarouselWrapper } from './CarouselWrapper';
import { DetailCard } from './DetailCard';
import * as S from './styled';

function DetaliPage() {
  const lecturesDetailMock = [
    { id: 1, name: 'Методический материал 1' },
    { id: 2, name: 'Методический материал 2' },
    { id: 3, name: 'Методический материал 3' },
    { id: 4, name: 'Методический материал 4' },
  ];

  return (
    <S.Wrapper>
      {/* <CarouselWrapper /> */}
      {lecturesDetailMock.map(({ id, name }) => (
        <DetailCard
          key={id}
          id={id}
          name={name}
        />
      ))}
    </S.Wrapper>
  );
}

export default DetaliPage;
