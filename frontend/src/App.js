import './App.css';
import dummyData from './data/data.json' //! temporary data until DB is ready
import CartList from './components/CartList'
import ProductDetails from './components/ProductDetails'
import ProductsList from './components/ProductsList'
import Search from './components/Search'

import { useEffect, useState } from 'react';

function App() {
  const [view, setView] = useState('homeView'); //! Setting the view for various components
  const [data, setData] = useState([]); //! MAIN DATA
  const [selected,setSelected] = useState({}); //! one product selected for the detailed
  console.log(data);

  useEffect(()=>{
    setData(dummyData);
  },[])

  const onSearch = () =>{
    console.log("searching");
  }

  return (
    <div className="App">
      <div className="nav">
        <span className="logo" onClick={() => {setView("homeView")}}></span>
        {view === "homeView" && <Search look={onSearch}/>}
        
        <span className="items" onClick={() => setView("cart")}>CART</span>
      </div>

      {view === "homeView" && <ProductsList data={data}/>}
      {view === "cartList" && <CartList />}
      {view === "productDetails" && <ProductDetails />}

    </div>
  );
}

export default App;
