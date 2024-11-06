import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import ContrastIcon from '@mui/icons-material/Contrast';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ThemeContext } from '../../contexts/theme/theme.context';
import Menu from '../menu/Menu';

const Header = () => {
  const { toggleTheme } = useContext(ThemeContext)
  return (
    <AppBar
      position='sticky'
      sx={{
        bgcolor: theme => theme.palette.mode === 'dark' ? 'background.paper' : 'primary.main',
        boxShadow: theme => `${theme.palette.divider} 0 1px 0`
      }}
    >
      <Toolbar sx={{ minHeight: { xs: '2.75rem' }, p: { xs: '0 0.75rem' } }}>
        <Link to="/" >
          <Box
            component='span'
            sx={{
              color: 'primary.contrastText',
              fontSize: '1.25rem',
              fontWeight: 700,
              height: '1.3125rem',
              paddingTop: '0.1875rem',
              width: '13.25rem'
            }}
          >
            Sales
          </Box>
        </Link>
        <Box sx={{ width: { xs: '1rem', sm: '2rem' } }}/>
        <Menu />
        <Box sx={{ flexGrow: 1 }} />
        <IconButton
          color="inherit"
          onClick={() => toggleTheme()}
        >
          <ContrastIcon />
        </IconButton>
        <IconButton
          color="inherit"
        >
          <Badge badgeContent={0} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;