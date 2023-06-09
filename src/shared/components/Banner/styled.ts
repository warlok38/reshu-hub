import { styled } from '@mui/material';

export const ImageContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 500px;
`;

export const Image = styled('img')`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 40px;
`;

export const ImageInner = styled('div')`
  padding: 0 56px;
`;
