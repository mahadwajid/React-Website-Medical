import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './../Assessts/Navbar.css';
import image from '../Images/Image5.png';
import { Link, NavLink } from 'react-router-dom';


function Navigation(){

    return(
        <div className="container">
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <img src={image} className="navbar-logo" alt="Logo" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <ul id="Lin-1">

              <NavLink className="navbarLink" href="home" to="/" >Home</NavLink>
              <NavLink className="navbarLink"  to="/Whoweare" >Who we are</NavLink>
               
               {/* <Link to="/Services" >
              <NavDropdown className="navbarLink" title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
              </Link> */}
              <Nav.Link className="navbarLink" href="Services" to="/Services" >Services</Nav.Link>
              <Nav.Link className="navbarLink" href="Blog"  to="/Blog" >Blogs</Nav.Link>
              <Nav.Link className="navbarLink" href="#link">Faqs</Nav.Link>
              <Nav.Link className="navbarLink" href="Contactus" to="/Contactus">Contact us</Nav.Link>

              <Link to="/Admin">
              <button>SwitchAdmin</button>
              </Link>


              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
      </div>
    )
}
export default Navigation;