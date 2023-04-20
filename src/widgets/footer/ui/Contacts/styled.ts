import { styled } from '@mui/material';

export const Contacts = styled('div')`
  width: 300px;

  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    width: 100%;
    margin-bottom: 16px;
  }
`;

export const TextContainer = styled('div')`
  display: flex;

  :not(:last-child) {
    align-items: center;
    margin-bottom: 16px;
  }

  p {
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 16px;
  }

  h4 {
    margin: 0;
  }

  svg {
    flex: 0 0 auto;
    height: 15px;
    width: 15px;
  }
`;
