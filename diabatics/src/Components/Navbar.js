import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './../Assessts/Navbar.css';
import image from '../Images/Image5.webp';
import { Link, NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import UserProfileModal from './UserprofileModel'; 

function Navigation(){

  const menudata=[
    {
      path:'/',
      name:"Home"
    },
    {
      path:'/Whoweare',
      name:"Whoweare"
    },
    {
      path:'/Services',
      name:"Services"
    },
    {
      path:'/Blog',
      name:"Blog"
    },
    {
      path:"/Contactus",
      name:"Contactus"
    }
  ]

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
        <div >
        <Navbar expand="lg" className='navbar'>
        <Container >
          <img src={image} className="navbar-logo" alt="Logo" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              
              {
                menudata.map((item)=>(
                  <NavLink to={item.path} key={item.name} style={{textDecoration:"none"}}>
                    <div className="list-items">{item.name}</div>

                  </NavLink>

                ))
              }


              {isLoggedIn ? (
            <div>
              <button onClick={handleShowUserProfile}>User Profile</button>
            </div>
          ) : (
            <Link to="/Login">
              {/* <button className='btn-1'>Login</button> */}
            </Link>
          )}

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