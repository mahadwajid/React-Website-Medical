import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import '../../Assessts/Adminnavbar.css';

function Adminnavbar(){
    return(
        <div>
         <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="ms-auto">
            <NavLink href="Adminblog" to="/Admin/Adminblog">Add Blog</NavLink>
            <span className="nav-divider"></span>
            <NavLink href="Adminblog" to="/Admin/Showblog">Show Blog</NavLink>
            <span className="nav-divider"></span>
            <NavLink href="Adminblog" to="/Admin/Patientdata">Enter Patient Data</NavLink>
            <span className="nav-divider"></span>
            <NavLink href="Adminblog" to="/Admin/ShowPatientdata">Show Patient Data</NavLink>

            <span className="nav-divider"></span>
            <NavLink href="Adminblog" to="/Admin/AddService">Add Service</NavLink>

            <span className="nav-divider"></span>
            <NavLink href="Adminblog" to="/Admin/ShowService">Show Service</NavLink>
          </Nav>
        </Container>
      </Navbar>
        </div>
    )
}
export default Adminnavbar;