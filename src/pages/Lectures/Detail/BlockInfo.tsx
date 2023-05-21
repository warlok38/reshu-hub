import React from 'react';
import { Typography, Box } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import YouTubeIcon from '@mui/icons-material/YouTube';
import HeadsetIcon from '@mui/icons-material/Headset';

export function BlockInfo() {
  return (
    <Box
      sx={{
        height: 'auto',
        mt: '32px',
        mb: '32px',
        bgcolor: 'white',
        boxShadow: 5,
        borderRadius: 6,
        minWidth: 300,
      }}
    >
      <Box
        sx={{
          height: 'auto',
          mt: '16px',
          ml: '16px',
          mb: '24px',
        }}
      >
        <Typography
          sx={{ mb: '16px' }}
          gutterBottom
          color="#FF9764"
          fontWeight="700"
          fontSize="48px"
          letterSpacing="0.5px"
          component="div"
        >
          1 модуль Nice to meet you
        </Typography>
      </Box>
      <Box
        sx={{
          pb: '16px',
          height: 'auto',
          mt: '16px',
          ml: '32px',
          mb: '24px',
        }}
      >
        <Typography
          sx={{ mb: '16px' }}
          gutterBottom
          color="#000000"
          fontWeight="500"
          fontSize="20px"
          letterSpacing="0.25px"
          lineHeight="25px"
          component="div"
        >
          <PictureAsPdfIcon sx={{ mr: '24px' }} />
          Text "Hello, people
        </Typography>
        <Typography
          sx={{ mb: '16px' }}
          gutterBottom
          color="#000000"
          fontWeight="500"
          fontSize="20px"
          letterSpacing="0.25px"
          component="div"
        >
          <YouTubeIcon sx={{ mr: '24px' }} /> видео "Nice to meet you"Файл
        </Typography>
        <Typography
          sx={{ mb: '16px' }}
          gutterBottom
          color="#000000"
          fontWeight="500"
          fontSize="20px"
          letterSpacing="0.25px"
          component="div"
        >
          <HeadsetIcon sx={{ mr: '24px' }} /> Nice to meet youФайл
        </Typography>
        <Typography
          sx={{ mb: '16px' }}
          gutterBottom
          color="#000000"
          fontWeight="500"
          fontSize="20px"
          letterSpacing="0.25px"
          component="div"
        >
          <PictureAsPdfIcon sx={{ mr: '24px' }} /> Грамматика "Артикль"Файл
        </Typography>
      </Box>
    </Box>
  );
}
