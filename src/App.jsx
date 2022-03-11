import Cart from "./pages/Cart";
import React,{useState} from 'react';
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Error from "./pages/Error";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";
import {BrowserRouter as Router , Route , Routes , Redirect} from "react-router-dom";


const App =() => {
  
  


  return (
    <>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/productlist' element={<ProductList/>} />
      <Route path='/singleproduct' element={<SingleProduct/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/cart' element={<Cart />} />
      <Route path="*" element={<Error/>} />

    </Routes>
    {/* <Home/>
    <Cart/> */}
    </>
    );
       
    
    
};

export default App;