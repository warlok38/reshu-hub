import { Button, styled } from '@mui/material';

export const LoginButton = styled(Button)`
  padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(4)}`};
  border-radius: 20px;
  text-transform: uppercase;
`;
