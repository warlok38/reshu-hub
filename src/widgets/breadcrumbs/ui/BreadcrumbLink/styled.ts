import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.text.secondary};
  :hover {
    text-decoration: underline;
  }
`;
