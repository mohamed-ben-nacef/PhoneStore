import './App.css';
import CartList from './components/CartList'
import ProductDetails from './components/ProductDetails'
import Home from './components/Home'
import axios from 'axios'
import { useEffect, useState } from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";


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
    <div className="App">
      <div className='nav'>
        <span className='logo' onClick={()=>{}}>LOGO</span>
        <span className='cart'>cart</span>
      </div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home data={data} addItem={handleAddCart}/>}/>
          <Route exact path="/cart" element={<CartList cart={cartData} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
