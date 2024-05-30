import { MouseEvent, useState } from 'react';

export const useShare = () => {
  const [state, setState] = useState<{
    anchor: HTMLButtonElement | null;
    id: number | undefined;
  }>({ anchor: null, id: undefined });

  const openSharePopoverHandler = (
    event: MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    setState({ anchor: event.currentTarget, id });
  };

  const closeSharePopoverHandler = () => {
    setState({ anchor: null, id: undefined });
  };

  return {
    state,
    onOpen: openSharePopoverHandler,
    onClose: closeSharePopoverHandler,
  };
};
