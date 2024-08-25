import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #0a1e3a; /* Dark futuristic blue */
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 1;
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: #ffffff;
  letter-spacing: 1.5px;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center; /* Center the options */
  align-items: center;
  gap: 80px; /* Increased gap for more space between options */

  @media (max-width: 768px) {
    gap: 5px; /* Decreased gap for mobile mode */
  }
`;
const NavItem = styled.li`
  list-style: none;
`;

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  color: #b0c7e8;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(176, 199, 232, 0.2);
  }

  &.active {
    color: #ffffff;
    background-color: #1a3b5d;
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <Logo>Trade Vision</Logo>
      <NavList>
        <NavItem><NavLinkStyled to="/dashboard">Dashboard</NavLinkStyled></NavItem>
        <NavItem><NavLinkStyled to="/forecast">Forecast</NavLinkStyled></NavItem>
        <NavItem><NavLinkStyled to="/feedback">Feedback</NavLinkStyled></NavItem>
        <NavItem><NavLinkStyled to="/profile">Profile</NavLinkStyled></NavItem>
      </NavList>
    </NavbarContainer>
  );
}

export default Navbar;
