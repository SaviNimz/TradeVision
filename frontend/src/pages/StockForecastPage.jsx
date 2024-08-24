import React, { useState } from 'react';
import SearchBar from '../components/Dashboard_Components/SearchBar';
import Header from '../components/StockForecastingPage/Header';
import StockChart from '../components/StockForecastingPage/StockChart';

const StockForecastPage = () => {
  const [selectedStock, setSelectedStock] = useState(null);

  const handleSelect = (item) => {
    setSelectedStock(item); // Update the selected stock state
    console.log('Selected stock:', item); // Log the selected stock
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Header Component */}
      <Header />

      {/* Search Bar Component */}
      <SearchBar onSelect={handleSelect} />

      {/* Display Selected Stock Information */}
      {selectedStock && (
        <div style={{ marginTop: '20px' }}>
          {/* Render the StockChart component and pass the selected stock symbol */}
          <StockChart stockType={selectedStock.symbol} />
        </div>
      )}
    </div>
  );
};

export default StockForecastPage;
