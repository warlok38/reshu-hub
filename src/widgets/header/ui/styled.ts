import { styled } from '@mui/material';

export const Wrapper = styled('div')`
  width: 100%;
  padding: ${({ theme }) => theme.spacing(4)};
  box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  z-index: 1;
`;

export const Content = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  width: 1168px;

  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    width: 100%;
  }
`;

export const Logo = styled('div')`
  display: flex;
  svg {
    flex: 0 0 auto;
    height: 48px;
  }
`;
