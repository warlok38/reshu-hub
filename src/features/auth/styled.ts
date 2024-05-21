import { Box, Button, Paper, styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const Wrapper = styled(Paper)`
  width: 448px;
  padding: ${({ theme }) => theme.spacing(6)};
  border-radius: 20px;
  background: #fff;
  font-size: 14px;
  font-weight: 400;
`;

export const Title = styled(Typography)`
  font-size: 36px;
  font-weight: 500;
  line-height: 40px;
  color: ${({ theme }) => theme.palette.secondary.main};
  text-align: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.palette.secondary.main};

  :hover {
    color: ${({ theme }) => theme.palette.secondary.dark};
  }
`;

export const StyledButton = styled(Button)`
  width: fit-content;
  line-height: 36px;
  text-transform: uppercase;
  border-radius: 50px;
  padding: 0 ${({ theme }) => theme.spacing(4)};
  min-width: 140px;
`;

export const StyledAuthLayout = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
