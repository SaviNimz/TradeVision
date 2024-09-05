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
  padding-top: 50px;
`;

// Styled component for the animated icon
const AnimatedIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  
  svg {
    font-size: 3rem;
    color: rgba(255, 255, 255, 0.7);
    animation: ${pulse} 2s infinite;
  }
`;

// Styled component for the message near the icon
const Message = styled.div`
  margin-top: 10px;
  font-size: 1rem;
  color: #ffffff;
  text-align: center;
`;

const PageContainer = styled.div`
  padding: 20px;
  background: linear-gradient(135deg, #000000, #002f4c, #004080); /* Dark blue gradient */
  color: #ffffff;
  min-height: 100vh; /* Full viewport height */
`;

const StockInfoContainer = styled.div`
  margin-top: 20px;
`;

const StockForecastPage = () => {
  const [selectedStock, setSelectedStock] = useState(null);

  const handleSelect = (stock) => setSelectedStock(stock); // Simplified the event handler

  return (
    <PageContainer>
      {/* Header */}
      <Header />

      {/* Search Bar */}
      <SearchBar onSelect={handleSelect} />

      {/* Display Message and Animated Icon when no stock is selected */}
      {!selectedStock ? (
        <IconContainer>
          <AnimatedIcon>
            <FaSearch /> {/* Magnifying glass icon */}
          </AnimatedIcon>
          <Message>Search for stocks and get your prediction now!</Message>
        </IconContainer>
      ) : (
        <StockInfoContainer>
          {/* StockChart with selected stock symbol */}
          <StockChart stockType={selectedStock.symbol} />
        </StockInfoContainer>
      )}
    </PageContainer>
  );
};

export default StockForecastPage;
