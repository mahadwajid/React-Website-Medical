import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './../Assessts/Navbar.css';
import image from '../Images/Image5.png';
import { Link, NavLink } from 'react-router-dom';


function Navigation(){
  

    return(
        <div className="container-fluid">
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container >
          <img src={image} className="navbar-logo" alt="Logo" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <ul id="Lin-1">

              <NavLink className="navbarLink" href="home" to="/" >Home</NavLink>
              <NavLink className="navbarLink"  to="/Whoweare" >Who we are</NavLink>
          
              <NavLink className="navbarLink" href="Services" to="/Services" >Services</NavLink>
              <NavLink className="navbarLink" href="Blog"  to="/Blog" >Blogs</NavLink>
              <NavLink className="navbarLink" href="Contactus" to="/Contactus">Contact us</NavLink>

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