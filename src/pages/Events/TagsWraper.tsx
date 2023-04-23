import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const tags: string[] = [
  'Все теги',
  'Выставка',
  'Конкурс',
  'Концерт',
  'Круглый стол',
  'Мастер-класс',
  'Олимпиада',
  'Открытая лекция',
];

export function TagsChip() {
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
  const handleDelete = (tag: string) => {
    setSelectedTags((prevSelectedTags) =>
      prevSelectedTags.filter((t) => t !== tag)
    );
  };
  return (
    <Box sx={{ width: '100%', mb: '32px' }}>
      <Stack
        direction="row"
        spacing={2}
      >
        <Typography
          fontWeight={'400'}
          fontSize={'18px'}
          lineHeight={'21px'}
          letterSpacing={'0.15px'}
        >
          Теги:
        </Typography>
        {tags.map((tag) => {
          const isSelected = selectedTags.includes(tag);
          return (
            <Chip
              key={tag}
              label={tag}
              variant={isSelected ? 'filled' : 'outlined'}
              color="warning"
              size="small"
              onClick={() =>
                setSelectedTags((prevSelectedTags) =>
                  isSelected
                    ? prevSelectedTags.filter((t) => t !== tag)
                    : [...prevSelectedTags, tag]
                )
              }
              onDelete={isSelected ? () => handleDelete(tag) : undefined}
            />
          );
        })}
      </Stack>
    </Box>
  );
}
