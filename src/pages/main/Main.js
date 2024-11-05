import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../notfound/NotFound';
import Search from '../search/Search';
import Detail from '../detail/Detail';

const Main = () => {
  return (
    <Routes>
      <Route path='/' Component={Search}/>
      <Route path='/details' Component={Detail} />
      <Route path='*' Component={NotFound} />
    </Routes>
  );
};

export default Main;