import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './Pages/Login';
import Menscollection from './Pages/Menscollection';
import Womencollection from './Pages/Womencollection';
import Kidscollection from './Pages/Kidscollection';
import Newarraivels from './Pages/Newarraivels';
import Brands from './Pages/Brands';
import Signup from './Pages/Signup';
import Addtocarts from './Pages/Addtocarts';
import Offers from './Pages/Offers';
import UnauthorizedPage from './Pages/UnauthorizedPage';


const Appcontent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/UnauthorizedPage' element={<UnauthorizedPage />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Menscollection' element={<Menscollection />} />
        <Route path='/Womencollection' element={<Womencollection />} />
        <Route path='/Kidscollection' element={<Kidscollection />} />
        <Route path='/Newarraivels' element={<Newarraivels />} />
        <Route path='/Offers' element={<Offers />} />
        <Route path='/Brands' element={<Brands />} />
        <Route path='/Addtocarts' element={<Addtocarts />} />
        <Route path='/Signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

const App = () => {
  return (
    <div>
      <Appcontent />
    </div>
  )
}

export default App
