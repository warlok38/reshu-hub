import { styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const Wrapper = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.text.primary};
  :hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;
