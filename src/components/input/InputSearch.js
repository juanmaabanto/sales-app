import React, { useContext } from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { ThemeContext } from '../../contexts/theme/theme.context';

const InputSearch = ({ filter, onFilterChange }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <Box 
      sx={{
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.mode === 'light' ? theme.palette.common.black : theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.mode === 'light' ? theme.palette.common.black : theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }}
    >
      <Box
        sx={{
          padding: theme.spacing(0, 2),
          height: '100%',
          position: 'absolute',
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <SearchIcon />
      </Box>
      <InputBase
        placeholder="Filter by brand or model"
        inputProps={{ 'aria-label': 'search' }}
        sx={{
          color: 'inherit',
          width: '100%',
          '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            [theme.breakpoints.up('sm')]: {
              width: '12ch',
              '&:focus': {
                width: '20ch',
              },
            },
          },
        }}
        value={filter}
        onChange={onFilterChange}
      />
    </Box>
  );
};

export default InputSearch;