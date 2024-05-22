import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  styled,
} from '@mui/material';

export const Wrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  height: 100%;
  cursor: pointer;

  :hover {
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.16);
  }
`;
export const Media = styled(CardMedia)`
  min-height: 320px;
`;
export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
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
  :last-child {
    padding-bottom: 0;
  }
`;
export const Actions = styled(CardActions)`
  padding: 0;
  padding-left: ${({ theme }) => theme.spacing(4)};
  padding-right: ${({ theme }) => theme.spacing(4)};
`;
