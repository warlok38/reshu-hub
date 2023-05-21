import React from 'react';
import { CardContent, Divider, Stack, Tooltip } from '@mui/material';
import * as S from './styled';

export const NewsCardContent = () => {
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
          <S.Categories>Конкурс</S.Categories>
        </Stack>
        <Tooltip title=" Университет Решетнева запустит на орбиту космический спутник летом 2023 года ещё слово слово слово слово слово слово слово слово слово словословословослово">
          <S.Title>
            Университет Решетнева запустит на орбиту космический спутник летом
            2023 года ещё слово слово слово слово слово слово слово слово слово
            словословословослово
          </S.Title>
        </Tooltip>
        <S.Description>
          На ReshUCube-2 будут отработаны задачи связи. Запуск на орбиту
          космического аппарата ReshuCube-2, разработанного учеными Университета
          Решетнева (СибГУ), состоится в июне 2023 года на космодроме Восточный.
          Сейчас текст потихоньку пропадёт слово слово слово слово слово слово
          слово слово слово слово слово слово слово слово слово слово слово
          слово слово слово слово слово слово слово слово слово слово слово
          слово слово слово слово слово слово
        </S.Description>
      </Stack>
    </CardContent>
  );
};
