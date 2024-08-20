// WelcomeMessage.js
import React from 'react';
import styled from 'styled-components';

const WelcomeText = styled.p`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 40px;
`;

const WelcomeMessage = ({ userName }) => {
  return (
    <>
      <WelcomeText>Hello {userName}!</WelcomeText>
      <Description>
        This is your profile page. Here you can generate forecasts, save and retrieve your previous forecasts.
      </Description>
    </>
  );
};

export default WelcomeMessage;
