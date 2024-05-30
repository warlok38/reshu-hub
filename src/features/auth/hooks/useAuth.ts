import { useSelector } from 'react-redux';
import { RootState } from 'shared/store';

export function useAuth() {
  const authState = useSelector(({ auth }: RootState) => auth);

  //TODO добавить init сюда

  return {
    auth: authState,
  };
}
