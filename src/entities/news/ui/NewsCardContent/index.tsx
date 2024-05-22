import React from 'react';
import { CardContent, Divider, Stack, Tooltip } from '@mui/material';
import * as S from './styled';
import { NewsCategoryEntity } from 'shared/models/news';

type NewsCardContent = {
  category: NewsCategoryEntity | null;
  title: string;
  text: string;
};

export const NewsCardContent = ({ title, text, category }: NewsCardContent) => {
  return (
    <CardContent style={{ flex: '1 1 auto' }}>
      <Stack
        direction="column"
        spacing={{ sm: 2, md: 3 }}
      >
        <Stack
          direction="row"
          divider={
            <Divider
              orientation="vertical"
              flexItem
            />
          }
          spacing={{ xs: 1, sm: 2 }}
        >
          {category && <S.Categories>{category.category}</S.Categories>}
        </Stack>
        <Tooltip title={title}>
          <S.Title>{title}</S.Title>
        </Tooltip>
        <S.Description>{text}</S.Description>
      </Stack>
    </CardContent>
  );
};
