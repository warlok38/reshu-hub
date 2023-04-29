import * as React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const tags: string[] = [
  'Все теги',
  'Новые',
  'О космосе',
  'О спутнике',
  'Математика',
  'Програмирование',
  'Ракетостроение',
  'Популярные',
];

export function TagsWrapper() {
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
          fontWeight="400"
          fontSize="18px"
          lineHeight="21px"
          letterSpacing="0.15px"
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
