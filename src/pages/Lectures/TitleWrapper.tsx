import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function TitleWrapper() {
  return (
    <Box sx={{ mb: '24px', mt: '24px' }}>
      <Typography
        color="#FF9764"
        variant="h2"
        fontWeight="700"
        fontSize="48"
        lineHeight="60px"
        letterSpacing="0.5"
      >
        Методические материалы
      </Typography>
    </Box>
  );
}
