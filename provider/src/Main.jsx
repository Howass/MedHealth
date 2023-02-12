import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/home/Home';
import Login from './components/login/Login';

const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/home' element={<Home />}></Route>
    </Routes>
  )
}

export default Main;