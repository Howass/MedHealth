import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';

const Main = () => {
    return (
        <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/home' element={<Home />}></Route>
        </Routes>
    )
}

export default Main;