import React from 'react';
import Box from '@mui/material/Box';

const NotFound = () => {

    return (
        <Box
          sx={{
            alignItems: 'center',
            color: 'primary.main',
            display: 'flex',
            justifyContent: 'center',
            height: '100%'
          }}
        >
          <Box sx={{ textAlign: 'center', width: '19.2rem' }}>
            <Box component='h1' sx={{ fontSize: { sx: '3.84rem', sm: '4.8rem' }, margin: 'auto' }}>404</Box>
            <Box component='h3' sx={{ fontSize: { sx: '0.96rem', sm: '1.2rem' }, margin: 'auto' }}>¡Ups!</Box>
            <Box component='p' sx={{ fontSize: { sx: '0.96rem', sm: '1.2rem' }, margin: 'auto' }}>
              La página solicitada no fue encontrada
            </Box>
          </Box>
        </Box>
    );
};

export default NotFound;