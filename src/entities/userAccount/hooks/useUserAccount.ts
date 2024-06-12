import { useLogout } from 'features/auth/hooks/useLogout';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import { ADD_PATH } from 'shared/constants/routePaths';

export const useUserAccount = () => {
  const { onLogout, isLoading: isLoadingLogout } = useLogout();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const open = useMemo(() => Boolean(anchorEl), [anchorEl]);

  const openMenuHandler = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const closeMenuHandler = () => {
    setAnchorEl(null);
  };
  const clickAddHandler = () => {
    closeMenuHandler();
    //фикс закрывания меню, иначе оно падает вниз страницы
    setTimeout(() => navigate(ADD_PATH), 1);
  };

  return {
    anchorEl,
    isMenuOpen: open,
    isLoadingLogout,
    onOpenMenu: openMenuHandler,
    onCloseMenu: closeMenuHandler,
    onClickAdd: clickAddHandler,
    onLogout,
  };
};
