import './App.css';
import CartList from './components/CartList'
import ProductDetails from './components/ProductDetails'
import Home from './components/Home'
import axios from 'axios'
import { useEffect, useState } from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";


function App() {
  const [data, setData] = useState([]); //! MAIN DATA
  const [selected,setSelected] = useState({}); //! one product selected for the detailed
  console.log(data);

  useEffect(()=>{
    axios.get('http://localhost:4000/api/phones')
    .then((response)=>setData(response.data))
    .catch((error)=>console.log(error))
  },[])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home data={data}/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
