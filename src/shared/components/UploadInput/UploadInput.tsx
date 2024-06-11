import React from 'react';
import { InputProps } from '@mui/material';
import * as S from './UploadInput.styled';

//TODO стилизовать или заменить на что то готовое
export const UploadInput = ({ ...props }: InputProps) => {
  return (
    <S.UploadInput
      {...props}
      type="file"
      disableUnderline
    />
  );
};
