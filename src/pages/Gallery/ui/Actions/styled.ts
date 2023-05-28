import { styled } from '@mui/material';

export const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  column-gap: ${({ theme }) => theme.spacing(4)};
`;
