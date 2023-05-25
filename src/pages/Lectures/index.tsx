import React from 'react';
import * as S from './styled';
import { TitleWrapper } from './TitleWrapper';
import { TagsWrapper } from './TagsWrapper';
import { MediaCard } from './MediaCard';
import { useOutlet } from 'react-router';
import { Grid, Box } from '@mui/material';

function LecturesPage() {
  const outlet = useOutlet();
  const lecturesMock = [
    { id: 1, name: 'Заголовок лекции 1' },
    { id: 2, name: 'Заголовок лекции 2' },
    { id: 3, name: 'Заголовок лекции 3' },
    { id: 4, name: 'Заголовок лекции 4' },
    { id: 5, name: 'Заголовок лекции 5' },
    { id: 6, name: 'Заголовок лекции 6' },
    { id: 7, name: 'Заголовок лекции 7' },
  ];

  if (outlet) {
    return outlet;
  }

  return (
    <S.Wrapper>
      <TitleWrapper />
      <TagsWrapper />
      <Box sx={{ width: '100%', mb: '64px' }}>
        <Grid
          container
          spacing={4}
        >
          {lecturesMock.map(({ id, name }) => (
            <Grid
              item
              key={id}
              xs={12}
              sm={6}
              md={4}
            >
              <MediaCard
                id={id}
                name={name}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </S.Wrapper>
  );
}

export default LecturesPage;
