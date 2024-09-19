import React, { useState } from 'react';
import { FaArrowUp, FaSearch } from 'react-icons/fa'; // Importing arrow up and search icons from react-icons
import SearchBar from '../components/Dashboard_Components/SearchBar';
import Header from '../components/StockForecastingPage/Header';
import SymbolInfo from '../components/StockForecastingPage/Symbolinfo';
import Chart from '../components/StockForecastingPage/Chart';
import styled, { keyframes } from 'styled-components'; // Add keyframes for animation
import ForecastNowButton from '../components/StockForecastingPage/ForecastNowButton'; // Import the new ForecastNowButton component

const StockForecastPage = () => {
  const [selectedStock, setSelectedStock] = useState(null);

  // Handle stock selection from the search bar
  const handleSelect = (stock) => setSelectedStock(stock);

  // Handle the click on "Forecast Now"
  const handleForecastClick = () => {
    alert('Forecast action triggered!'); 
  };

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
          {/* SymbolInfo with selected stock symbol */}
          <SymbolInfo symbol={selectedStock.symbol} />
          <Chart symbol={selectedStock.symbol} />
        </StockInfoContainer>
      )}

      {/* Conditionally render the "Forecast Now" button only if a stock is selected */}
      {selectedStock && <ForecastNowButton onClick={handleForecastClick} />}
    </PageContainer>
  );
};

export default StockForecastPage;

// Styled components
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

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

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
  position: relative; /* So that absolute elements can be positioned */
`;

const StockInfoContainer = styled.div`
  margin-top: 20px;
`;
