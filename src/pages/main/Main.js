import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import NotFound from '../notfound/NotFound';
import Search from '../search/Search';
import Detail from '../detail/Detail';
import Header from '../../components/header/Header';


const Main = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        height: '100%',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <Header />
      <Routes>
        <Route path='/' Component={Search}/>
        <Route path='/details/:productId' Component={Detail} />
        <Route path='*' Component={NotFound} />
      </Routes>
    </Box>
  );
};

export default Main;