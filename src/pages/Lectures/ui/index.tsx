import React from 'react';
import { Cards } from './Cards';
import { Typography } from '@mui/material';
import { TagsWrapper } from './TagsWrapper';

const LecturesPage = () => {
  return (
    <div>
      <Typography
        variant="h3"
        mb={(theme) => theme.spacing(6)}
        sx={(theme) => ({ color: theme.palette.primary.main, fontWeight: 700 })}
      >
        Методические материалы
      </Typography>
      <TagsWrapper />
      <Cards />
    </div>
  );
};

export default LecturesPage;
