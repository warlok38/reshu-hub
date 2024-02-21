import { styled } from '@mui/material';

export const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spacing(4)};
`;
