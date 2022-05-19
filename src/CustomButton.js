import React from 'react';
import Button from '@mui/material/Button';

export default function CustomButton({ children, onClick }) {
  return (
    <Button onClick={onClick} variant="button"
      sx={{
        width: 100,
        'font-family': '"Wingdings", Times, serif',
        border: 'groove 3px purple',
      }}  
    >
      {children}
    </Button>
  );
}