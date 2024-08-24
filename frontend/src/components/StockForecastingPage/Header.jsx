import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
`;

const Slogan = styled.p`
  font-size: 1.2rem;
  color: #777;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Stock Forecast Page</Title>
      <Slogan>Predict real-time market stock data</Slogan>
    </HeaderContainer>
  );
};

export default Header;
