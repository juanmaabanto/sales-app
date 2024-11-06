import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import InputSearch from '../../components/input/InputSearch';
import { useProducts } from '../../hooks/useProducts';
import ImageList from '../../components/list/ImageList';


const Search = () => {
  const [filter, setFilter] = useState('');
  const { data, error, isLoading } = useProducts(filter);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

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
            Products List
          </Box>
          <InputSearch filter={filter} onFilterChange={handleFilterChange} />
        </Box>
        {(isLoading ? 
          <Box
            sx={{
                mt: '2rem',
                textAlign: 'center'
            }}
          >
            <CircularProgress />
          </Box> :
          (error ?
            <Box
            sx={{
              color: 'error.main',
              fontSize: '0.75rem',
              overflow: 'hidden',
              p: '0.25rem',
              textOverflow: 'ellipsis',
              whiteSpace: 'pre-wrap'
          }}
            >
              an error ocurred
            </Box> : <ImageList data={data} />
          ))}
      </Box>
    </Box>
  );
};

export default Search;