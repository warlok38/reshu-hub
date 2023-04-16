import { styled } from '@mui/material';

export const Wrapper = styled('div')`
  width: 100%;
  padding: 38px 40px;
  background-color: #4783b5;
  color: #fff;
`;

export const Content = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  width: 1200px;

  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const Contacts = styled('div')`
  width: 300px;

  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    width: 100%;
    margin-bottom: 15px;
  }
`;

export const Info_items = styled('div')`
  display: flex;

  :not(:last-child) {
    align-items: center;
    margin-bottom: 15px;
  }

  p {
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 15px;
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

export const Logo = styled('div')`
  width: 263px;
  height: 141px;
  background-color: #fff;
`;
