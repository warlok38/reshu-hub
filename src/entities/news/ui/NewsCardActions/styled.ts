import { IconButton as MuiIconButton, styled, Typography } from '@mui/material';
import { VisibilityOutlined } from '@mui/icons-material';

export const Eye = styled(VisibilityOutlined)`
  color: ${({ theme }) => theme.palette.accent.main};
`;

export const NumberViews = styled(Typography)`
  color: #616161;
`;

export const IconButton = styled(MuiIconButton)`
  color: ${({ theme }) => theme.palette.accent.main};
`;
