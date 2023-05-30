import { styled } from '@mui/material';

export const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  max-width: 696px;
  width: 100%;
  height: 100%;
  padding-left: ${({ theme }) => theme.spacing(14)};
  padding-right: ${({ theme }) => theme.spacing(14)};
  padding-top: ${({ theme }) => theme.spacing(8)};
  padding-bottom: ${({ theme }) => theme.spacing(8)};
`;

export const TitleWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spacing(4)};
`;

export const Extra = styled('div')`
  margin-top: auto;
  padding-top: ${({ theme }) => theme.spacing(4)};
`;
