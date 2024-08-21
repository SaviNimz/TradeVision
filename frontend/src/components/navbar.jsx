import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaUser, FaBars, FaTimes } from 'react-icons/fa';

const NavbarContainer = styled.nav`
  background: linear-gradient(90deg, #0f2027, #203a43, #2c5364);
  padding: 1rem 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    justify-content: flex-end;
  }
`;

const HamburgerIcon = styled.div`
  display: block;
  cursor: pointer;
  font-size: 2rem;
  color: #ffffff;

  @media (min-width: 768px) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    background: linear-gradient(90deg, #0f2027, #203a43, #2c5364);
    padding: 1rem 0;
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.5);
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-200%)')};
    transition: transform 0.3s ease-in-out;
  }
`;

const NavItem = styled.li`
  margin: 0 3rem;

  @media (max-width: 768px) {
    margin: 1rem 0;
    text-align: center;
  }
`;

const NavLink = styled(Link)`
  color: #ffffff;
  font-size: 1.2rem;
  text-transform: uppercase;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 2px;
  position: relative;
  padding: 0.5rem 0;

  &:hover {
    color: #00f260;
  }
`;

const ProfileIconWrapper = styled(Link)`
  color: #ffffff;
  font-size: 1.8rem;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #00f260;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.div`
  color: #ffffff;
  font-size: 1.8rem;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;

  @media (max-width: 768px) {
    display: none;
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer>
      <HamburgerIcon onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </HamburgerIcon>
      <Logo>Trade Vision</Logo>
      <NavList isOpen={isOpen}>
        <NavItem><NavLink to="/dashboard">Dashboard</NavLink></NavItem>
        <NavItem><NavLink to="/forecast">Forecast</NavLink></NavItem>
        <NavItem><NavLink to="/feedback">Feedback</NavLink></NavItem>
        <NavItem><NavLink to="/profile">Profile</NavLink></NavItem>
      </NavList>
      <ProfileIconWrapper to="/profile">
        <FaUser />
      </ProfileIconWrapper>
    </NavbarContainer>
  );
}

export default Navbar;
