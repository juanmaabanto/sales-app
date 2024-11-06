
import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';

const Loader = ({ error = '' }) => {

  return (
    <Box sx={{ bgcolor: 'background.default', height: '100%' }}>
      {error === '' && <LinearProgress color='primary' title='linear'/>}
      <Box
        sx={{
          height: '8.6rem',
          marginTop: '-4.3rem',
          position: 'absolute',
          textAlign: 'center',
          top: '50%',
          width: '100%'
        }}
      >
        <CircularProgress color='primary' title='circular' />
      </Box>
      {error !== '' && <Box
        sx={{
          bottom: '0',
          padding: '0 0.5rem 1rem',
          position: 'absolute',
          textAlign: 'center',
          width: '100%'
        }}
      >
        <Box sx={{ color: '#ff0000', fontSize: { xs: '0.875rem', sm: '1rem' }, m: 0 }}>
          {error}
        </Box>
      </Box>}
    </Box>
  );
};

Loader.propTypes = {
    error: PropTypes.string
}

export default Loader;