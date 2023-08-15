import './App.css';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import CartList from './components/CartList';
import AddPhone from './components/AddEdit';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbars from './components/Navbars.js';

function App() {
  const [data, setData] = useState([]); //! MAIN DATA
  const [cartData, setCartData] = useState([]);
  const [selected, setSelected] = useState({}); //! one product selected for the detailed
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
          exact
          path='/'
          element={<Home data={data} setData={setData} setSelected={setSelected} addToCart={handleAddCart} searchQuery={searchQuery} />}
        />
        <Route path='/cart' element={<CartList cart={cartData} deleteCart={handleDeleteCart} />} />
        <Route path='/ProductDetails' element={<ProductDetails selected={selected} addToCart={handleAddCart} />} />
        <Route path='/AddPhone' element={<AddPhone />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
