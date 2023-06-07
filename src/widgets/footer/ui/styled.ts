import { styled } from '@mui/material';

export const Wrapper = styled('div')`
  width: 100%;
  padding: ${({ theme }) => theme.spacing(6)} ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.palette.secondary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;

export const Content = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  width: 1168px;

  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    width: 100%;
    flex-direction: column;
  }
`;
