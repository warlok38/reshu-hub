import { Button, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import { useScreen } from 'shared/hooks/useScreen';

export const SendForm = () => {
  const { isSmallScreen } = useScreen();
  const { state } = useLocation();

  const { targetId } = state || {};
  const inputCommentRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const elementToScroll = document.getElementById(targetId);
    if (elementToScroll) {
      elementToScroll.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (inputCommentRef.current) {
        inputCommentRef.current.focus();
      }
    }

    return window.history.replaceState({}, '');
  }, [targetId]);

  return (
    <Stack
      spacing={6}
      id="event__comment-input"
      sx={{ scrollMarginTop: isSmallScreen ? 60 : 80 }}
    >
      <Stack
        spacing={6}
        direction="row"
      >
        <Typography variant="h4">Комментарии</Typography>
      </Stack>
      <Stack
        spacing={4}
        maxWidth={isSmallScreen ? '100%' : 600}
      >
        <TextField
          label="Написать комментарий"
          maxRows={5}
          multiline
          inputRef={inputCommentRef}
        />
        <Button
          variant="contained"
          sx={{ width: 'fit-content' }}
        >
          Отправить
        </Button>
      </Stack>
    </Stack>
  );
};
