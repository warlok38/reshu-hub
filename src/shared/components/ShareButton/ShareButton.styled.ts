import { IconButton as MUIIconButton, styled } from '@mui/material';

export const IconButton = styled(MUIIconButton)`
  color: ${({ theme }) => theme.palette.accent.main};
  svg {
    font-size: ${({ theme }) => theme.spacing(5)};
  }
`;
