import { styled } from '@mui/material';

export const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spacing(6)};
  margin: auto;
  //TODO заменить на коммент ниже после того, как пофиксят расширение
  /* padding: ${({ theme }) => theme.spacing(6)} ${({ theme }) =>
    theme.spacing(4)}; */
  padding-top: ${({ theme }) => theme.spacing(16)};
  padding-bottom: ${({ theme }) => theme.spacing(16)};
  padding-left: ${({ theme }) => theme.spacing(4)};
  padding-right: ${({ theme }) => theme.spacing(4)};
  height: 100%;
  width: 1200px;

  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    width: 100%;
    padding-top: ${({ theme }) => theme.spacing(4)};
  }
`;
