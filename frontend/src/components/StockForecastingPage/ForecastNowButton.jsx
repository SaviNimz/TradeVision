/* eslint-disable no-unused-vars */
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
  background-color: #004080; /* Dark blue background */
  border: none;
  border-radius: 50px; /* Rounded button */
  padding: 15px 30px;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); /* Shadow for depth */
  transition: background-color 0.3s, transform 0.3s; /* Smooth transitions */

  &:hover {
    background-color: #0050a0; /* Lighter blue on hover */
    transform: scale(1.05); /* Slightly enlarge on hover */
  }

  &:active {
    transform: scale(0.95); /* Slightly shrink when clicked */
  }

  display: flex; /* Center icon and text */
  align-items: center;
  justify-content: center;
`;

export default ForecastNowButton;
