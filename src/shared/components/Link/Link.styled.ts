import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.text.primary};
  :hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  &.active {
    color: ${({ theme }) => theme.palette.primary.main};
    :hover {
      color: ${({ theme }) => theme.palette.primary.light};
    }
  }
`;
