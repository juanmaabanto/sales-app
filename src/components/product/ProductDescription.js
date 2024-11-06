import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ProductDescription = ({ brand, model, price, cpu, ram, os, displayResolution, battery, weight }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h6">Descripción</Typography>
      <Box sx={{ mt: 2 }}>
        <Typography><strong>Marca:</strong> {brand}</Typography>
        <Typography><strong>Modelo:</strong> {model}</Typography>
        <Typography><strong>Precio:</strong> ${price}</Typography>
        <Typography><strong>CPU:</strong> {cpu}</Typography>
        <Typography><strong>RAM:</strong> {ram}</Typography>
        <Typography><strong>Sistema Operativo:</strong> {os}</Typography>
        <Typography><strong>Resolución de Pantalla:</strong> {displayResolution}</Typography>
        <Typography><strong>Batería:</strong> {battery}</Typography>
        <Typography><strong>Peso:</strong> {weight} g</Typography>
      </Box>
    </Box>
  );
};

export default ProductDescription;