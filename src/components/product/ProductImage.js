import React from 'react';
import Box from '@mui/material/Box';

const ProductImage = ({ imgUrl }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mb: 3
      }}
    >
      <img
        src={imgUrl}
        alt="Imagen del producto"
        style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain' }}
      />
    </Box>
  );
};

export default ProductImage;