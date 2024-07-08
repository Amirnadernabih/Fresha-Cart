import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import MainLayout from './layouts/MainLayout'
import Home from './components/Home/Home'
import Products from './components/Products/Products'
import Cart from './components/Cart/Cart'
import Categories from './components/Categories/Categories'
import Brands from './components/Brands/Brands'
import NotFound from './components/NotFound/NotFound'
import AuthLayout from './layouts/AuthLayout'
import Signup from './components/Signup/Signup'
import Signin from './components/Signin/Signin'
import ProtectedRoutes from './ProtectedRoutes/ProtectedRoutes'
import ProductDetails from './components/ProductDetails/ProductDetails'
import CartContextProvider from './context/cartContext'
import {ToastContainer} from 'react-toastify'
export default function App() {

  const routes = createBrowserRouter([
    {
      path: '/', element: <MainLayout />, children: [
        { index: true, element: <ProtectedRoutes> <Home /> </ProtectedRoutes>},
        { path: 'home', element: <ProtectedRoutes> <Home /> </ProtectedRoutes> },
        { path: 'products', element: <ProtectedRoutes> <Products /> </ProtectedRoutes> },
        { path: 'cart', element: <ProtectedRoutes> <Cart /> </ProtectedRoutes> },
        { path: 'categories', element: <ProtectedRoutes> <Categories /> </ProtectedRoutes> },
        { path: 'brands', element: <ProtectedRoutes> <Brands /> </ProtectedRoutes> },
        { path: 'product-details/:id', element: <ProtectedRoutes> <ProductDetails /> </ProtectedRoutes> },
        { path: '*', element: <NotFound /> },
      ]
    },
    {
      path: '/', element: <AuthLayout />, children: [

        { path: 'signup', element: <Signup /> },
        { path: 'signin', element: <Signin /> },

      ]
    }
  ])

  return (
    <div>
<CartContextProvider>
<RouterProvider router={routes} />
</CartContextProvider>
    
    
      <ToastContainer theme='colored' autoClose={1000}/>
    </div>
  )
}
