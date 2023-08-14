import { Navbar, Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import { Link } from 'react-router-dom';
import '../App.css';

const Navbars = ()=>{

    return (
        <Navbar >
            <Nav>
              <div>
                <Nav.Item icon={<HomeIcon />} >
                <Link to={"/"}>
                <a href="/" >
                    Home
                  </a>
                </Link>
                 
                </Nav.Item>
                <Nav.Item >
                  <Link to={"/cart"}>
                <a href="/" >
                    Cart
                  </a>
                </Link>
                </Nav.Item>
              </div>
            </Nav>
            <Nav pullRight>
              <div >
                <input
                  type="text"
                  placeholder="Search..."
                />
              </div>
            </Nav>
        </Navbar>
    )
}
export default Navbars