import { styled } from '@mui/material';

export const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spacing(2)};
  margin-right: ${({ theme }) => theme.spacing(5)};
`;

export const Description = styled('div')`
  display: flex;
  column-gap: ${({ theme }) => theme.spacing(2)};
`;
