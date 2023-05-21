import React from 'react';
import { Chip, ChipProps, Stack, StackProps } from '@mui/material';

export type TagsData = {
  id: number;
  name: string;
};

type NewsTagsProps = {
  data: TagsData[];
  stackProps?: StackProps;
  chipProps?: ChipProps;
};

export const NewsTags = ({ data, stackProps, chipProps }: NewsTagsProps) => {
  const [selectedTags, setSelectedTags] = React.useState<TagsData[]>([]);

  const handleClickTag = (tag: TagsData, isSelected: boolean) => {
    setSelectedTags((prevSelectedTags) =>
      isSelected
        ? prevSelectedTags.filter((t) => t.id !== tag.id)
        : [...prevSelectedTags, tag]
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
            {...chipProps}
          />
        );
      })}
    </Stack>
  );
};
