import './App.css';
import CartList from './components/CartList'
import ProductDetails from './components/ProductDetails'
import Home from './components/Home'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Navbars from "./components/Navbars"


function App() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState({});

  useEffect(()=>{
    axios.get('http://localhost:4000/api/phones')
      .then((response)=>setData(response.data))
      .catch((error)=>console.log(error))
  },[])
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