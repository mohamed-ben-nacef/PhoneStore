import './App.css';
import dummyData from './data/data.json' //! temporary data until DB is ready
import { useEffect, useState } from 'react';

function App() {
  const [view, setView] = useState('homeView');
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(()=>{
    setData(dummyData);
  },[])


  return (
    <div className="App">
      <div className="navBar">
        <span className="logo"> TEK STORE </span>
      </div>
    </div>
  );
}

export default App;
