import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function Adminnavbar(){
    return(
        <div>
         <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="ms-auto">
            <NavLink href="Adminblog" to="/Admin/Adminblog">Add Blog</NavLink>
          </Nav>
        </Container>
      </Navbar>
        </div>
    )
}
export default Adminnavbar;