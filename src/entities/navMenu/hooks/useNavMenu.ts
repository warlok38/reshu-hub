import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { usePrevious } from 'react-use';

export function useNavMenu() {
  const [isOpen, setOpen] = useState(false);
  const { pathname } = useLocation();
  const previousPathname = usePrevious(pathname);

  const openHandler = () => {
    setOpen(true);
  };

  const closeHandler = () => {
    setOpen(false);
  };

  const toggleHandler = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  useEffect(() => {
    if (previousPathname !== pathname) {
      setOpen(false);
    }
  }, [pathname, previousPathname]);

  return {
    isOpen,
    onOpen: openHandler,
    onClose: closeHandler,
    onToggle: toggleHandler,
  };
}
