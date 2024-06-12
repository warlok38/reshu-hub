import { useSelector } from 'react-redux';
import { RootState } from 'shared/store';
import { UserRoles } from 'shared/models/api/user/role';

export const useRoles = (roleCodes: UserRoles[]) => {
  const { user } = useSelector(({ auth }: RootState) => auth);

  const hasRoles = user ? roleCodes.includes(user.role.code) : false;

  return {
    hasRoles,
  };
};
