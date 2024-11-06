import React from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';

const Detail = () => {
  const { productId } = useParams();
  console.log(productId)
  return (
    <Box 
      sx={{
        height: '100%',
        overflowY: 'auto',
        width: '100%'
      }}
    >
      <Box
        sx={{
          color: 'text.primary',
          m: '0 auto',
          maxWidth: '64rem',
          p: '1.5rem 1.5rem',
          pl: { sm: '4rem' },
          pr: { sm: '4rem' }
        }}
      >
        <h2>Detalle de producto {productId} </h2>
      </Box>
    </Box>
  );
};

export default Detail;