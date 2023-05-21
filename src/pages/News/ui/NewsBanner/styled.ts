import { Button, styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const ButtonDetail = styled(Button)`
  color: ${({ theme }) => theme.palette.text.secondary};
  border-radius: 40px;
  font-weight: 700;
`;

export const LinkToDetail = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.text.secondary};
`;
