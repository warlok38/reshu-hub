import React, { ReactNode } from 'react';
import * as S from './styled';
import { TextTruncate } from 'shared/components/TextTruncate';

type CaptionProps = {
  title?: string;
  description?: string;
  extra?: ReactNode;
};

export const Captions = ({ title, description, extra }: CaptionProps) => {
  if (!title && !description && !extra) {
    return null;
  }
  return (
    <S.Wrapper>
      <S.TitleWrapper>
        {title && (
          <TextTruncate
            variant="h3"
            fontWeight={700}
          >
            {title}
          </TextTruncate>
        )}
        {description && (
          <TextTruncate
            variant="body1"
            fontWeight={700}
            lineCount={2}
            maxWidth="80%"
          >
            {description}
          </TextTruncate>
        )}
      </S.TitleWrapper>

      {extra && <S.Extra>{extra}</S.Extra>}
    </S.Wrapper>
  );
};
