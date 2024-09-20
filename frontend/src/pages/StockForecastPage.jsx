import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; 
import SearchBar from '../components/Dashboard_Components/SearchBar';
import Header from '../components/StockForecastingPage/Header';
import SymbolInfo from '../components/StockForecastingPage/Symbolinfo';
import Chart from '../components/StockForecastingPage/Chart';
import styled, { keyframes } from 'styled-components'; 
import ForecastNowButton from '../components/StockForecastingPage/ForecastNowButton'; 
import ForecastedPricesChart from '../components/StockForecastingPage/ForecastedPricesChart'; // Import the new ForecastedPricesChart component

const StockForecastPage = () => {
  const [selectedStock, setSelectedStock] = useState(null);
  const [predictedPrices, setPredictedPrices] = useState([]);

  // Handle stock selection from the search bar
  const handleSelect = (stock) => setSelectedStock(stock);

  const handleForecastClick = async () => {
    const n_future = 10; 
    const symbol = selectedStock['symbol']; 
  
    try {
      const response = await fetch('http://localhost:5000/api/Stockpredict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ symbol, n_future }), 
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json(); 
      setPredictedPrices(data.predicted_prices); // Save the predicted prices
  
    } catch (error) {
      console.error('Error fetching forecast data:', error);
    }
  };

  return (
    <PageContainer>
      <Header />

      {/* Search Bar */}
      <SearchBar onSelect={handleSelect} />

      {!selectedStock ? (
        <IconContainer>
          <AnimatedIcon>
            <FaSearch /> 
          </AnimatedIcon>
          <Message>Search for stocks and get your prediction now!</Message>
        </IconContainer>
      ) : (
        <StockInfoContainer>
          <SymbolInfo symbol={selectedStock.symbol} />
          <Chart symbol={selectedStock.symbol} />
        </StockInfoContainer>
      )}

      {selectedStock && <ForecastNowButton onClick={handleForecastClick} />}

      {/* Display the ForecastedPricesChart only if we have predicted prices */}
      {predictedPrices.length > 0 && (
        <ForecastedPricesChart predictedPrices={predictedPrices} />
      )}
    </PageContainer>
  );
};

export default StockForecastPage;

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
