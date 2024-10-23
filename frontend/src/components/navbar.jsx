/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logoImage from '../assets/logo.jpeg'; // Replace with the actual path to your logo image

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #0a1e3a; /* Dark futuristic blue */
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0; /* Ensure the navbar stays at the top */
  z-index: 3; /* Ensure the navbar stays above other content */
 
  
  /* Mobile responsiveness */
  @media (max-width: 768px) {
    flex-direction: column; /* Stack items vertically on smaller screens */
    padding: 10px;
  }

  /* Transition for smooth color change */
  transition: background-color 0.3s ease-in-out;

  /* Optional: Change navbar background when scrolling */
  &.scrolled {
    background-color: #07162a; /* Darker shade when scrolling */
  }
`;


const Logo = styled.div`
  display: flex;
  align-items: center; /* Center image and text vertically */
  font-size: 1.8rem;
  font-weight: bold;
  color: #ffffff;
  letter-spacing: 1.5px;

  img {
    height: 60px; 
    width: 80px;
    margin-right: 10px; /* Space between image and text */
  }
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center; /* Center the options */
  align-items: center;
  gap: 80px; /* Increased gap for desktop */

  @media (max-width: 768px) {
    display: ${props => (props.isOpen ? 'flex' : 'none')}; /* Show/hide nav links */
    flex-direction: column; /* Stack links vertically */
    position: absolute;
    top: 60px; /* Adjust as needed */
    left: 0;
    right: 0;
    background-color: #0a1e3a; /* Match navbar background */
    padding: 15px 0; /* Decreased padding for mobile */
    border-top: 2px solid #1a3b5d; /* Top border for separation */
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
  }
`;

const NavItem = styled.li`

  list-style: none;
  width: 100%; /* Full width for clickable area */

  @media (max-width: 768px) {
    text-align: center; /* Center text for mobile */
    padding: 5px 0; /* Decreased padding for mobile */
  }
`;

const NavLinkStyled = styled(NavLink)`
text-decoration: none;
        color: #8f8f8f;
        font-size: 1.2rem;
        font-weight: 400;
        transition: all 0.5s ease-in-out;
        position: relative;
        

        &::before {
          content: attr(data-item);
          transition: 0.5s;
          color: #8254ff;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          width: 0;
          overflow: hidden;
        }

  



  &.active {
    color: #ffffff;
    text-color: #1a3b5d;
  }
`;

const HamburgerMenu = styled.div`
  display: none; /* Hide by default */

  @media (max-width: 768px) {
    display: block; /* Show hamburger menu on mobile */
    cursor: pointer;
    font-size: 2rem;
    color: #ffffff;
  }

  &::before {
    content: '☰'; /* Hamburger icon */
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <NavbarContainer>
      <Logo>
        <img src={logoImage} alt="Trade Vision Logo" /> {/* Logo image */}
        Trade Vision
      </Logo>
      <HamburgerMenu onClick={toggleMenu} />
      <NavList isOpen={isOpen}>
        <NavItem><NavLinkStyled to="/dashboard">Dashboard</NavLinkStyled></NavItem>
        <NavItem><NavLinkStyled to="/forecast">Forecast</NavLinkStyled></NavItem>
        <NavItem><NavLinkStyled to="/feedback">Feedback</NavLinkStyled></NavItem>
        <NavItem><NavLinkStyled to="/profile">Profile</NavLinkStyled></NavItem>
      </NavList>
    </NavbarContainer>
  );
}

export default Navbar;
