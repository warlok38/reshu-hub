import { styled } from '@mui/material';

export const Wrapper = styled('div')`
  display: flex;
  column-gap: 8px;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints.values.sm}px) {
    flex-direction: column;
  }
`;
