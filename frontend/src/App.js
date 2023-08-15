import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CartList from './components/CartList';
import ProductDetails from './components/ProductDetails';
import AddPhone from './components/Add';
import Update from './components/Update';
import Navbars from './components/Navbars.js';

function App() {
  const [data, setData] = useState([]); // Main data
  const [cartData, setCartData] = useState([]);
  const [selected, setSelected] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/phones')
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleAddCart = (item) => {
    setCartData([...cartData, item]);
  };

  const handleDeleteCart = (item) => {
    const updatedCart = cartData.filter((e) => e !== item);
    setCartData(updatedCart);
  };

  return (
    <BrowserRouter>
      <Navbars onSearch={setSearchQuery} />
      <Routes>
        <Route
          path="/"
          element={<Home data={data} setData={setData} setSelected={setSelected} addToCart={handleAddCart} searchQuery={searchQuery} />}
        />
        <Route path='/cart' element={<CartList data={cartData} deleteCart={handleDeleteCart} />} />
        <Route path='/ProductDetails' element={<ProductDetails selected={selected} addToCart={handleAddCart} />} />
        <Route path='/AddPhone' element={<AddPhone />} />
        <Route path='/Update/:id' element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
