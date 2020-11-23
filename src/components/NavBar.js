import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  return (
    <Navbar className="bg-light">
      <Navbar.Brand>Videos App</Navbar.Brand>
        <NavLink to="/">Home</NavLink>
         
      
    </Navbar>
  );
}

export default NavBar;
