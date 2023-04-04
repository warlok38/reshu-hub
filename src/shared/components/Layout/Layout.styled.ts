import { styled } from '@mui/material';

export const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  min-width: ${({ theme }) => theme.breakpoints.values.lg};
`;
