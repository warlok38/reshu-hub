import React from 'react';
import { Stack, Tooltip, Typography } from '@mui/material';
import {
  TelegramIcon,
  TelegramShareButton,
  VKIcon,
  VKShareButton,
} from 'react-share';
import { isProduction } from 'shared/utils/isProduction';

type ShareProps = {
  url: string;
};

export const Share = ({ url }: ShareProps) => {
  const disabled = !isProduction();

  return (
    <Stack
      py={2}
      px={4}
      gap={2}
    >
      <Typography>Поделиться</Typography>
      <Stack
        gap={2}
        direction="row"
      >
        <Tooltip
          title={disabled ? 'Работает только в продакшене' : ''}
          placement="top"
        >
          <TelegramShareButton
            url={url}
            disabled={disabled}
          >
            <TelegramIcon
              size={32}
              round
            />
          </TelegramShareButton>
        </Tooltip>
        <Tooltip
          title={disabled ? 'Работает только в продакшене' : ''}
          placement="top"
        >
          <VKShareButton
            url={url}
            disabled={disabled}
          >
            <VKIcon
              size={32}
              round
            />
          </VKShareButton>
        </Tooltip>
      </Stack>
    </Stack>
  );
};