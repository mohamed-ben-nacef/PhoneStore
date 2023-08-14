import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbars from './components/Navbars';
import Home from './components/Home';
import CartList from './components/CartList';
import ProductDetails from './components/ProductDetails';

function App() {
  const [data, setData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [selected, setSelected] = useState({});
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/phones')
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, [trigger]);

  const handleAddCart = (item) => {
    setCartData([...cartData, item]);
  };

  const removeFromCart = (productToRemove) => {
    const updatedCartItems = cartItems.filter(product => product !== productToRemove);
    setCartItems(updatedCartItems);
  return (
    <BrowserRouter>
      <Navbars />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home data={data} setSelected={setSelected} addCart={handleAddCart} />}
        />
        <Route path="/cart" element={<CartList cartData={cartData} />} />
        <Route path="/product-details" element={<ProductDetails selected={selected} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;