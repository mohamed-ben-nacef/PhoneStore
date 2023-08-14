import './App.css';
import CartList from './components/CartList'
import ProductDetails from './components/ProductDetails'
import Home from './components/Home'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Navbars from "./components/Navbars"

function App() {

  const navigate = useNavigate();
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


  return (
    <BrowserRouter>
    <Navbars/>
        <Routes>
          <Route exact path="/" element={<Home data={data} setSelected={setSelected} />} />
          <Route path="/cart" element={<CartList />} />
          <Route path="/ProductDetails" element={<ProductDetails selected={selected} />} />
        </Routes>
    
    </BrowserRouter>

  );
}

export default App;