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
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Protecter from './components/Protecter';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import Showproduct from './Pages/Showproduct';
import TotalPurchase from './Pages/Womencollection';


const Appcontent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Login />
          }
        />
        <Route
          path='/*'
          element={
            <UnauthorizedPage />
          }
        />
        <Route
          path='/Home'
          element={
            <Protecter>
              <Home />
            </Protecter>
          }
        />
        <Route
          path='/Showproduct/:id'
          element={
            <Protecter>
              <Showproduct />
            </Protecter>
          }
        />
        <Route
          path='/Menscollection'
          element={
            <Protecter>
              <Menscollection />
            </Protecter>
          }
        />
                <Route
          path='/TotalPurchase'
          element={
            <Protecter>
              <TotalPurchase />
            </Protecter>
          }
        />
        <Route path='/Womencollection'
          element={
            <Protecter>
              <Womencollection />
            </Protecter>
          }
        />
        <Route
          path='/Kidscollection'
          element={
            <Protecter>
              <Kidscollection />
            </Protecter>
          }
        />
        <Route
          path='/Newarraivels'
          element={
            <Protecter>
              <Newarraivels />
            </Protecter>
          }
        />
        <Route
          path='/Offers'
          element={
            <Protecter>
              <Offers />
            </Protecter>
          }
        />
        <Route
          path='/Brands'
          element={
            <Protecter>
              <Brands />
            </Protecter>
          }
        />
        <Route
          path='/Addtocarts'
          element={
            <Protecter>
              <Addtocarts />
            </Protecter>
          }
        />
        <Route
          path='/Signup'
          element={

            <Signup />

          }
        />
      </Routes>
    </BrowserRouter>
  )
}

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Appcontent />
        <ToastContainer
          position="top-right"
          autoClose={3000} // 3 seconds
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          draggable
          theme="colored"
        />
      </Provider>
    </div>
  )
}

export default App
