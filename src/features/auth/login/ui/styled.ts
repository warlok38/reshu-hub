import { Button, styled } from '@mui/material';

export const LoginButton = styled(Button)`
  padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(4)}`};
  border-radius: 20px;
  background: ${({ theme }) => theme.palette.secondary.main};
  color: #fff;
  text-transform: uppercase;

  :hover {
    background: ${({ theme }) => theme.palette.primary.main};
  }
`;
