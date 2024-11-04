import './Navbar.css';
import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom

const Navbar = () => {
  return (
    <div className='Nav'>
      <h1><strong>My Portfolio</strong></h1>
      <div className='Link'>
        <ul>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/project" 
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Project
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/skills" 
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
