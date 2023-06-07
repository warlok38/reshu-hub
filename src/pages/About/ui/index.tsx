import React from 'react';
import * as S from './styled';
import { Target } from './Components/Target';
import { Typography } from '@mui/material';
import { Cards } from './Cards';

function AboutPage() {
  return (
    <S.Wrapper>
      <Target />
      <div>
        <Typography
          variant="h4"
          sx={{ mb: 8 }}
        >
          Спутники
        </Typography>
        <Cards />
      </div>
    </S.Wrapper>
  );
}

export default AboutPage;
