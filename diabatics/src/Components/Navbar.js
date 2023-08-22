import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './../Assessts/Navbar.css';
import image from '../Images/Image5.png';
import { Link, NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import UserProfileModal from './UserprofileModel'; 


function Navigation(){

  const isLoggedIn = !!localStorage.getItem('adminToken');
  const userEmail = localStorage.getItem('userEmail');
  
  const [showUserProfileModal, setShowUserProfileModal] = useState(false); // State to control the modal

  const handleShowUserProfile = () => {
    setShowUserProfileModal(true);
  };

  const handleCloseUserProfile = () => {
    setShowUserProfileModal(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('userEmail');
    setShowUserProfileModal(false); 
  };

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

              {isLoggedIn ? (
            <div>
              <button onClick={handleShowUserProfile}>User Profile</button>
            </div>
          ) : (
            <Link to="/Login">
              {/* <button className='btn-1'>Login</button> */}
            </Link>
          )}


              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <UserProfileModal
        show={showUserProfileModal}
        email={userEmail}
        onClose={handleCloseUserProfile}
        onLogout={handleLogout} // You need to pass the logout function to the modal
      />
    
      </div>
    )
}
export default Navigation;