import React from 'react';
import Box from '@mui/material/Box';
import InputSearch from '../../components/input/InputSearch';

const Search = () => {
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
          maxWidth: '80rem',
          p: '1.5rem 1.5rem',
          pl: { sm: '4rem' },
          pr: { sm: '4rem' }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: '1rem',
            gap: { xs: '1rem', sm: '0' }
          }}
        >
          <Box
            sx={{
              fontWeight: 500,
              fontSize: { xs: '1rem', sm: '2rem' }
            }}
          >
            Lista de Productos
          </Box>
          <InputSearch />
        </Box>
        <Box> Aqui va la lista </Box>
      </Box>
    </Box>
  );
};

export default Search;