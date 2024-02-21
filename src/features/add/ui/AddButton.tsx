import React from 'react';
import { Button } from '@mui/material';
import { AddOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router';

export function AddButton() {
  const navigate = useNavigate();

  return (
    <Button
      variant="contained"
      color="secondary"
      size="small"
      sx={{ borderRadius: 50, minWidth: 0, width: 32 }}
      onClick={() => navigate('/admin/add')}
    >
      <AddOutlined />
    </Button>
  );
}
