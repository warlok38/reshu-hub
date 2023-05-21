import { styled, Typography } from '@mui/material';

export const Categories = styled(Typography)`
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #9e9e9e;
`;

export const Title = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 3; // количество строк
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0.25px;
`;

export const Description = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.5px;
  color: #616161;
`;
