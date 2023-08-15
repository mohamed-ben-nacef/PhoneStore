import { useState } from 'react';
import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbars = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [isAddPhoneModalOpen, setAddPhoneModalOpen] = useState(false);


  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };
  const handleAddPhoneClick = () => {
    setAddPhoneModalOpen(true);
  };

  return (
    <Navbar>
      <Nav>
        <div>
          <Nav.Item icon={<HomeIcon />}>
            <Link to={'/'}>
              <a href='/'>Home</a>
            </Link>
          </Nav.Item>
          
          <Nav.Item>
            <Link to={'/AddPhone'}>
              <a href='/AddPhone'>Add Product</a>
            </Link>
          </Nav.Item>

          <Nav.Item>
            <Link to={'/cart'}>
              <a href='/'>Cart</a>
            </Link>
          </Nav.Item>

          <Nav.Item>
            <div>
             <input type='text' placeholder='Search...' value={query} onChange={handleSearch} />
            </div>
          </Nav.Item>
        </div>
      </Nav>
    </Navbar>
  );
};

export default Navbars;