import { styled } from '@mui/material';

export const Row = styled('div')`
  padding-left: ${({ theme }) => theme.spacing(2)};
  padding-right: ${({ theme }) => theme.spacing(2)};
  border-radius: 5px;
  :hover {
    background-color: ${({ theme }) => theme.palette.background.default};
  }
`;

export const Title = styled('div')`
  font-weight: 500;
  font-size: 20px;
  line-height: 25px;
  white-space: pre-wrap;
`;
export const Size = styled('div')`
  margin-top: auto;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 2px;
`;
