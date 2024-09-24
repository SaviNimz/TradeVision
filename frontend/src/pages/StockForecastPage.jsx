/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaSearch, FaCheck, FaSpinner } from 'react-icons/fa'; // Import FaCheck and FaSpinner
import SearchBar from '../components/Dashboard_Components/searchBar.jsx';
import Header from '../components/StockForecastingPage/Header.jsx';
import SymbolInfo from '../components/StockForecastingPage/Symbolinfo.jsx';
import Chart from '../components/StockForecastingPage/Chart.jsx';
import styled, { keyframes } from 'styled-components';
import ForecastNowButton from '../components/StockForecastingPage/ForecastNowButton.jsx';
import ForecastedPricesChart from '../components/StockForecastingPage/ForecastedPricesChart.jsx'; // Import the new ForecastedPricesChart component
import ForecastSummary from '../components/StockForecastingPage/ForecastSummary.jsx';


const StockForecastPage = () => {
  const [selectedStock, setSelectedStock] = useState(null);
  const [predictedPrices, setPredictedPrices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [forecastGenerated, setForecastGenerated] = useState(false);

  // Handle stock selection from the search bar
  const handleSelect = (stock) => setSelectedStock(stock);

  const handleForecastClick = async () => {
    setLoading(true); 
    setForecastGenerated(false);
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
      setPredictedPrices(data.predicted_prices);
      setForecastGenerated(true);

    } catch (error) {
      console.error('Error fetching forecast data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && (
        <LoadingOverlay>
          {!forecastGenerated ? (
            <Spinner>
              <FaSpinner className="spinner" />
              <LoadingMessage>Generating forecast...</LoadingMessage>
            </Spinner>
          ) : (
            <SuccessMessage>
              <FaCheck className="check-icon" />
              <LoadingMessage>Forecast generated!</LoadingMessage>
            </SuccessMessage>
          )}
        </LoadingOverlay>
      )}

      <PageContainer blur={loading}>
        <Header />

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

        {/* Flex container for side-by-side components */}
        {predictedPrices.length > 0 && (
          <ForecastContainer>
            <ForecastedPricesChart predictedPrices={predictedPrices} />
            <ForecastSummary predictedPrices={predictedPrices} />
          </ForecastContainer>
        )}
      </PageContainer>
    </>
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
text-align: center;
  margin-bottom: 30px;
  font-size: 2.5em;
  color: #f9f9f9;
  font-family: 'Arial', sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  animation: fadeIn 1s ease-in-out;
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
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
text-align: center;
  margin-bottom: 30px;
  font-size: 2.5em;
  color: #f9f9f9;
  font-family: 'Arial', sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  animation: fadeIn 1s ease-in-out;
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  margin-top: 10px;
  font-size: 1rem;
  color: #ffffff;
  text-align: center;
`;

const PageContainer = styled.div`

  padding: 20px;
  background: linear-gradient(135deg, #000000, #002f4c, #004080); 
  color: #ffffff;
  min-height: 100vh;
  position: relative;
  filter: ${({ blur }) => (blur ? 'blur(5px)' : 'none')};
`;

const StockInfoContainer = styled.div`

  margin-top: 20px;
`;

const ForecastContainer = styled.div`

  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LoadingOverlay = styled.div`

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const Spinner = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;

  .spinner {
    font-size: 4rem;
    color: #ffffff;
    animation: spin 2s infinite linear;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const SuccessMessage = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;

  .check-icon {
    font-size: 4rem;
    color: #00ff00;
  }
`;

const LoadingMessage = styled.div`

  margin-top: 20px;
  font-size: 1.5rem;
  color: #ffffff;
`;