import React from 'react';

import './App.css';
import Navbar from './component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import CartList from './component/CartList';

function App() {
  return (
    <>
    <Navbar />
     <Routes> 
       <Route exact path="/" element={<Home />} />
       <Route exact path="/cart" element={<CartList />} />
     </Routes>
    </>
 
  );
}

export default App;
