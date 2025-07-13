import './App.css';
import React, { useContext, useEffect, useState } from 'react';
import { RouterProvider, createHashRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Cart from './Components/Cart/Cart';
import Products from './Components/Products/Products';
import Register from './Components/Register/Register';
import  { userContext } from '../src/Context/UserContext'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import { Offline, Online } from "react-detect-offline";
import { Toaster } from 'react-hot-toast';
import { CartContext } from './Context/CartContext';
import { NavbarContext } from './Context/NavbarContext';

function App() {
  let { getUserCart } = useContext(CartContext)
  let { setNumber, number } = useContext(NavbarContext)

  async function getCartNumber() {
    if (Number(localStorage.getItem('cartProblem'))) {
      let response = await getUserCart()
      // console.log(response?.data.numOfCartItems);
      setNumber(response?.data?.numOfCartItems)
    }
    else {
      setNumber(0)
    }
  }

  let { setUserToken, userToken } = useContext(userContext)
  useEffect(() => {



    if (localStorage.getItem('userToken')) {
      setUserToken(localStorage.getItem('userToken'))
     
      getCartNumber()
    }
    setUserToken(localStorage.getItem('userToken'))

  }, [localStorage.getItem('userToken')])

  let x = createHashRouter([
    {
      path: '/', element: <Layout />, children: [
        { index: true, path: '/', element: <ProtectedRoute><Home /></ProtectedRoute> },
        { path: '/cart', element: <ProtectedRoute><Cart /></ProtectedRoute> },
        { path: '/products', element: <ProtectedRoute><Products /></ProtectedRoute> },
        { path: '/productDetails/:id', element: <ProtectedRoute><ProductDetails /></ProtectedRoute> },
        { path: '/register', element: <Register /> },
        { path: '/login', element: <Login /> },
        { path: '*', element: <NotFound /> },
      ]
    }
  ])


  return <>
    <Offline>
      <div className='alert alert-danger h4 text-center'> You Are Offline <i className="fa fa-wifi"></i></div>
    </Offline>
    <Toaster />
    <RouterProvider router={x} />
  </>
}

export default App;
