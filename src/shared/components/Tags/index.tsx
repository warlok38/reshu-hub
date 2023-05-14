import React, { FC } from 'react';
import { Chip, ChipProps, Stack, StackProps } from '@mui/material';

export type TagsData = {
  id: number;
  name: string;
};

interface TagsProps {
  data: TagsData[];
  stackProps?: StackProps;
  chipProps?: ChipProps;
}

export const Tags: FC<TagsProps> = ({ data, stackProps, chipProps }) => {
  const [selectedTags, setSelectedTags] = React.useState<TagsData[]>([]);

  const handleClickTag = (tag: TagsData, isSelected: boolean) => {
    setSelectedTags((prevSelectedTags) =>
      isSelected
        ? prevSelectedTags.filter((t) => t.id !== tag.id)
        : [...prevSelectedTags, tag]
    );
  };

  const handleDelete = (id: number) => {
    setSelectedTags((prevSelectedTags) =>
      prevSelectedTags.filter((t) => t.id !== id)
    );
  };

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      rowGap={3}
      columnGap={3}
      {...stackProps}
    >
      {data.map((item) => {
        const isSelected = selectedTags.includes(item);
        return (
          <Chip
            key={item.id}
            label={item.name}
            variant={isSelected ? 'filled' : 'outlined'}
            color="warning"
            size="small"
            onClick={() => handleClickTag(item, isSelected)}
            onDelete={() => {
              if (isSelected) {
                handleDelete(item.id);
              }
            }}
            {...chipProps}
          />
        );
      })}
    </Stack>
  );
};
