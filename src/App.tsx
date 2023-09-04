import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Home from './Pages/Home/Home';
import {Routes , Route } from "react-router-dom"
import ProductDetail from './Pages/ProductDetail/productDetail';


function App() {
  return (
   <>
   <Routes>
    <Route path ="/" element={<Home  />}/>
    <Route path ="/:id" element={<ProductDetail/>}/>

   </Routes>
  
   </>
  );
}

export default App;
