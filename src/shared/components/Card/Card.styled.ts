import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  styled,
} from '@mui/material';

export const Wrapper = styled(Card)`
  border-radius: 20px;
  ${({ onClick }) =>
    Boolean(onClick) &&
    `
    :hover {
    cursor: pointer;
    }`}
`;
export const Media = styled(CardMedia)`
  height: 320px;
`;
export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spacing(3)};
  padding-top: ${({ theme }) => theme.spacing(4)};
  padding-bottom: ${({ theme }) => theme.spacing(4)};
`;
export const Content = styled(CardContent)`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spacing(2)};
  padding: 0;
  padding-left: ${({ theme }) => theme.spacing(4)};
  padding-right: ${({ theme }) => theme.spacing(4)};
`;
export const Actions = styled(CardActions)`
  padding: 0;
  padding-left: ${({ theme }) => theme.spacing(4)};
  padding-right: ${({ theme }) => theme.spacing(4)};
`;
