
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import React from 'react'
import LandingPage from './vendorDashboard/pages/LandingPage'

import Login from './vendorDashboard/components/forms/Login'
import MainLayout from './vendorDashboard/layouts/MainLyout'
import { Register } from './vendorDashboard/components/forms/Register';
import AddFirm from './vendorDashboard/components/forms/AddFirm';
import AddProduct from './vendorDashboard/components/forms/AddProduct';
import AllProducts from './vendorDashboard/components/AllProducts';

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>} >
        <Route path='/' element={<LandingPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={ <Register/>} />
        <Route path="/add-firm" element={ <AddFirm/>} />
        <Route path="/add-product" element={ <AddProduct/>} />
        <Route path="/all-products" element={ <AllProducts/>} />
        
      </Route>
   
  ));

 return (
   <RouterProvider router={router}/>  
 )

}

export default App