import React, { useState } from 'react';
import { FaArrowUp, FaSearch } from 'react-icons/fa'; // Importing arrow up and search icons from react-icons
import SearchBar from '../components/Dashboard_Components/SearchBar';
import Header from '../components/StockForecastingPage/Header';
import StockChart from '../components/StockForecastingPage/StockChart';
import styled, { keyframes } from 'styled-components';

// Define bounce animation for the icon
const bounce = keyframes`
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

// Define pulse animation for the magnifying glass
const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
`;

// Styled component for the container holding the icon and message
const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px; /* Adjust padding to position icon lower */
`;

// Styled component for the animated icon
const AnimatedIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  
  svg {
    font-size: 3rem; /* Adjust size as needed */
    color: rgba(255, 255, 255, 0.7); /* Transparent white color */
    animation: ${pulse} 2s infinite; /* Pulse animation */
  }
`;

// Styled component for the message near the icon
const Message = styled.div`
  margin-top: 10px; /* Space between icon and message */
  font-size: 1rem; /* Smaller font size */
  color: #ffffff;
  text-align: center;
`;

const PageContainer = styled.div`
  padding: 20px;
  background: linear-gradient(135deg, #000000, #002f4c, #004080); /* Very dark blue gradient background */
  color: #ffffff; /* Light text color for contrast */
  min-height: 100vh; /* Ensures the background covers the full viewport height */
`;

const StockInfoContainer = styled.div`
  margin-top: 20px;
`;

const StockForecastPage = () => {
  const [selectedStock, setSelectedStock] = useState(null);

  const handleSelect = (item) => {
    setSelectedStock(item); // Update the selected stock state
    console.log('Selected stock:', item); // Log the selected stock
  };

  return (
    <PageContainer>
      {/* Header Component */}
      <Header />

      {/* Search Bar Component */}
      <SearchBar onSelect={handleSelect} />

      {/* Display Message and Animated Icon while no stock is selected */}
      {!selectedStock && (
        <IconContainer>
          <AnimatedIcon>
            <FaSearch /> {/* Render magnifying glass icon */}
          </AnimatedIcon>
          <Message>Search for stocks and get your prediction now!</Message>
        </IconContainer>
      )}

      {/* Display Selected Stock Information */}
      {selectedStock && (
        <StockInfoContainer>
          {/* Render the StockChart component and pass the selected stock symbol */}
          <StockChart stockType={selectedStock.symbol} />
        </StockInfoContainer>
      )}
    </PageContainer>
  );
};

export default StockForecastPage;
