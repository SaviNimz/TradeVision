import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 30px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.6); /* Slightly transparent background */
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #f0f0f0; /* Light, elegant text color */
  font-weight: 600;
  letter-spacing: 2px; /* Adds a slight spread to the letters */
  margin-bottom: 10px;
`;

const Slogan = styled.p`
  font-size: 1.3rem;
  color: #a8a8a8; /* Subtle grey for a softer feel */
  font-weight: 300;
  margin-bottom: 0;
  line-height: 1.6; /* Enhances readability */
  font-style: italic;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Predict Future Trends</Title>
      <Slogan>Stay ahead with real-time market insights</Slogan>
    </HeaderContainer>
  );
};

export default Header;
