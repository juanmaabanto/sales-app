import React, { useState } from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ProductAction = ({ options }) => {
  const [color, setColor] = useState(options.colors[0].name);
  const [storage, setStorage] = useState(options.storages[0].name);

  const handleAddToCart = () => {
    alert(`Producto añadido al carrito: ${color}, ${storage}`);
  };

  return (
    <Box>
      <Typography variant="h6">Acciones</Typography>
      <Box sx={{ mt: 2 }}>
        <Select
          value={color}
          onChange={(e) => setColor(e.target.value)}
          fullWidth
        >
          {options.colors.map((option) => (
            <MenuItem key={option.code} value={option.name}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Select
          value={storage}
          onChange={(e) => setStorage(e.target.value)}
          fullWidth
        >
          {options.storages.map((option) => (
            <MenuItem key={option.code} value={option.name}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddToCart}
          fullWidth
        >
          Añadir al carrito
        </Button>
      </Box>
    </Box>
  );
};

export default ProductAction;
