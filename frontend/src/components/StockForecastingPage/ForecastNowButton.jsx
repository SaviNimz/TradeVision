// ForecastNowButton.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Define bounce animation for the "Forecast Now" button
const bounceForecast = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

// ForecastNowButton component
const ForecastNowButton = ({ onClick }) => {
  return <ForecastNow onClick={onClick}>Forecast Now!</ForecastNow>;
};

// Styled component for the button
const ForecastNow = styled.button`
  font-size: 1.5rem;
  color: #ffffff;
  background-color: #01182b;
  border: none;
  border-radius: 8px;
  padding: 15px 30px;
  z-index: 9999;
  animation: ${bounceForecast} 2s infinite;
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2), 
              0 0 20px rgba(0, 200, 255, 0.6),  /* Glow effect */
              0 0 40px rgba(0, 200, 255, 0.4); /* Glow spread */
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.1); /* Slight zoom on hover */
    box-shadow: 0 4px 20px rgba(0, 200, 255, 0.8),  /* Enhanced glow on hover */
                0 0 60px rgba(0, 200, 255, 0.6);
  }

  &:active {
    transform: scale(1); /* Reset zoom when clicked */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2), 
                0 0 20px rgba(0, 200, 255, 0.6), /* Glow remains when clicked */
                0 0 40px rgba(0, 200, 255, 0.4);
  }
`;

export default ForecastNowButton;
