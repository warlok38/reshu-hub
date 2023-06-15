import { styled } from '@mui/material';

export const Wrapper = styled('div')`
  position: relative;
  display: flex;
  align-items: center;
  column-gap: ${({ theme }) => theme.spacing(4)};
  :hover {
    cursor: pointer;
    opacity: 0.8;
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
