import { styled } from '@mui/material';

export const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 20px 0;
  height: 100%;
  width: 1200px;

  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    width: 100%;
    padding: 20px 40px;
  }
`;
