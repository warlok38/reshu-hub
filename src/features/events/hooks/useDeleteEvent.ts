import { enqueueSnackbar } from 'notistack';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDeleteEventMutation } from 'shared/api/events/eventsApi';
import { EVENTS_PATH } from 'shared/constants/routePaths';

export function useDeleteEvent() {
  const [deleteEvent, { isLoading, isSuccess, error }] =
    useDeleteEventMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      navigate(EVENTS_PATH);
    }
  });

  useEffect(() => {
    if (!!error) {
      enqueueSnackbar(error.message || 'Ошибки при отправке в архив', {
        variant: 'error',
      });
    }
  }, [error]);

  return {
    onDelete: deleteEvent,
    isLoading,
  };
}
