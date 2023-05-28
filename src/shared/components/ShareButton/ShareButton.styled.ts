import { IconButton, styled } from '@mui/material';

export const Wrapper = styled(IconButton)`
  color: ${({ theme }) => theme.palette.accent.main};
  svg {
    font-size: ${({ theme }) => theme.spacing(5)};
  }
`;
