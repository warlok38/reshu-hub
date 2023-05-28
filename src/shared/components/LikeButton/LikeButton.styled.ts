import { styled } from '@mui/material';
import { Checkbox as MUICheckbox } from '@mui/material';

export const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
`;

export const Checkbox = styled(MUICheckbox)`
  padding: ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.palette.accent.main};
  svg {
    font-size: ${({ theme }) => theme.spacing(5)};
  }
  &.Mui-checked {
    color: ${({ theme }) => theme.palette.accent.main};
  }
`;

export const Count = styled('div')`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: 12px;
  line-height: 20px;
`;
