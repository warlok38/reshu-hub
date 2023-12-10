import { IconButton as MuiIconButton, styled } from '@mui/material';

export const IconButton = styled(MuiIconButton)`
  color: ${({ theme }) => theme.palette.accent.main};
`;
