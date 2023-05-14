import { styled } from '@mui/material';

export const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 64px;
`;


export const Box = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 697px;
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

export const TextPoint = styled('div')`
  list-style-type: square;

`;