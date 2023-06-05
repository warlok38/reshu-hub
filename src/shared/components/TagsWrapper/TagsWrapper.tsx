import * as React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { tags } from 'shared/mocks/EventsTags';

export function TagsWrapper() {
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
  const allSelected = selectedTags.length === tags.length - 1;

  const handleClick = (tag: string) => {
    setSelectedTags((prevSelectedTags) => {
      if (tag === 'Все теги') {
        return allSelected ? [] : [...tags.slice(1)];
      } else {
        const isSelected = prevSelectedTags.includes(tag);
        if (isSelected && allSelected) {
          return prevSelectedTags.filter((t) => t !== tag);
        } else if (!isSelected && prevSelectedTags.length === tags.length - 2) {
          return [...tags.slice(1)];
        } else {
          return isSelected
            ? prevSelectedTags.filter((t) => t !== tag)
            : [...prevSelectedTags, tag];
        }
      }
    });
  };
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
          const isSelected = allSelected || selectedTags.includes(tag);
          return (
            <Chip
              key={tag}
              label={tag}
              variant={isSelected ? 'filled' : 'outlined'}
              color="warning"
              size="small"
              onClick={() => handleClick(tag)}
              onDelete={isSelected ? () => handleDelete(tag) : undefined}
            />
          );
        })}
      </Stack>
    </Box>
  );
}
