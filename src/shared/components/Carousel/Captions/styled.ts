import { styled } from '@mui/material';

export const Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  max-width: 740px;
  width: 100%;
  height: 100%;
  padding-left: ${({ theme }) => theme.spacing(14)};
  padding-right: ${({ theme }) => theme.spacing(14)};
  padding-top: ${({ theme }) => theme.spacing(8)};
  padding-bottom: ${({ theme }) => theme.spacing(8)};
  background-image: linear-gradient(
    90deg,
    rgba(44, 44, 44, 0.67) 30%,
    transparent
  );
`;

export const TitleWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spacing(4)};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  white-space: pre-wrap;
`;

export const Extra = styled('div')`
  padding-top: ${({ theme }) => theme.spacing(4)};
`;
