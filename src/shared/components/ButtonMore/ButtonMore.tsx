import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function ButtonMore() {
  return (
    <Box
      sx={{
        mt: '32px',
        mb: '64px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
      }}
    >
      <Button
        sx={{
          alignItems: 'center',
          height: '36px',
          borderRadius: '50px',
          bgcolor: '#FF9764',
          boxShadow: '0px 1px 1px',
        }}
        variant="contained"
        disableElevation
      >
        <Typography
          color="#FFFFFF"
          fontWeight="500"
          fontSize="14"
          letterSpacing="1.25"
          textTransform="uppercase"
        >
          больше мероприятий
        </Typography>
      </Button>
    </Box>
  );
}
