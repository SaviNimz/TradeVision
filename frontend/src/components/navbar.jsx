import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaUser } from 'react-icons/fa'; // Importing profile icon from react-icons

const NavbarContainer = styled.nav`
  background: linear-gradient(90deg, #0f2027, #203a43, #2c5364);
  padding: 1rem 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 1.5rem;
`;

const NavLink = styled(Link)`
  color: #ffffff;
  font-size: 1.2rem;
  text-transform: uppercase;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 2px;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #00f260;
    transition: width 0.3s ease-in-out;
    position: absolute;
    bottom: -5px;
    left: 0;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    color: #00f260;
  }
`;

const ProfileIcon = styled(FaUser)`
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #00f260;
  }
`;

// Add a wrapper for NavList to align items correctly
const NavWrapper = styled.div`
  display: flex;
  align-items: center;
`;

function Navbar() {
  return (
    <NavbarContainer>
      <NavWrapper>
        <NavList>
          <NavItem><NavLink to="/dashboard">Dashboard</NavLink></NavItem>
          <NavItem><NavLink to="/forecast">Forecast</NavLink></NavItem>
          <NavItem><NavLink to="/feedback">Feedback</NavLink></NavItem>
        </NavList>
      </NavWrapper>
      <ProfileIcon />
    </NavbarContainer>
  );
}

export default Navbar;
