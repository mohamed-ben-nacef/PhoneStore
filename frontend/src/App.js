import './App.css';
import Home from './components/Home'
import ProductDetails from './components/ProductDetails'
import CartList from './components/CartList'
import AddEdit from './components/AddEdit';

import axios from 'axios'
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Navbars from "./components/Navbars.js"

function App() {
  const [data, setData] = useState([]); //! MAIN DATA
  const [cartData,setCartData] = useState([]);
  const [selected,setSelected] = useState({}); //! one product selected for the detailed
  console.log('🦊',cartData);


  useEffect(()=>{
    axios.get('http://localhost:4000/api/phones')
      .then((response)=>setData(response.data))
      .catch((error)=>console.log(error))
  },[])


  const handleAddCart = (item) =>{
    setCartData([...cartData,item]);
  }
  const handleDeleteCart = (item) =>{
    const updatedCart = cartData.filter((e)=> e!==item);
    setCartData(updatedCart);
  }

  return (
    <BrowserRouter>
    <Navbars/>
        <Routes>
          <Route exact path="/" element={<Home data={data} setSelected={setSelected} addToCart={handleAddCart}/>} />
          <Route path="/cart" element={<CartList cart={cartData} deleteCart={handleDeleteCart} />} />
          <Route path="/ProductDetails" element={<ProductDetails selected={selected} addToCart={handleAddCart}/>} />
          <Route path="/AddEdit" element={<AddEdit selected={selected}/>} />
        </Routes>
    
    </BrowserRouter>

  );
}

export default App;