import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbars = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };


  return (
    <nav className="navigation">
    <Link to={'/'}>
      <a href='/'>🏠 HOME</a>
    </Link>
    <Link to={'/AddPhone'}>
      <a href='/AddPhone'>ADD PHONE</a>
    </Link>
     <Link to={'/cart'}>
           <a href='/'>CART 🛒</a>
    </Link>
    <div>
        <input type='text' placeholder='Search...' value={query} onChange={handleSearch} />
        </div>
    </nav>
)
}
export default Navbars;