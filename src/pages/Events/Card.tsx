import React from 'react';
import * as S from './styled';
import { StyledEngineProvider } from '@mui/material/styles';
import Breadcrumbs from './Breadcrumbs';

export default function Card() {
  return (
    <S.WraperCard>
      <S.CardImage></S.CardImage>
      <S.CardBody>
        <S.CardContent>
          <S.CardContentType>
            <S.CardContentTypeA>конкурс </S.CardContentTypeA>
          </S.CardContentType>
          <S.cardContentTitle>
            <S.cardContentTitleA>
              конкурс на получение стипендии Призидента и Правительства РФ{' '}
            </S.cardContentTitleA>
          </S.cardContentTitle>
          <S.cardContentDate>
            <S.cardContentDateA>8 апреля - 12 мая</S.cardContentDateA>
          </S.cardContentDate>
          <S.cardContentDescription>
            <S.cardContentDescriptionA>
              К участию приглашаются ученики 10-11-х классов.
            </S.cardContentDescriptionA>
          </S.cardContentDescription>
        </S.CardContent>
        <S.cardIcon></S.cardIcon>
      </S.CardBody>
    </S.WraperCard>
  );
}
