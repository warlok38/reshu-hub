import { IconButton as MUIIconButton, styled } from '@mui/material';

export const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
`;

export const IconButton = styled(MUIIconButton)`
  color: ${({ theme }) => theme.palette.accent.main};
  svg {
    font-size: ${({ theme }) => theme.spacing(5)};
  }
`;

export const Count = styled('div')`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: 12px;
  line-height: 20px;
`;
