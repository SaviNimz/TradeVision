import React, { useState } from 'react';
import SearchBar from '../components/Dashboard_Components/SearchBar';
import Header from '../components/StockForecastingPage/Header';
import StockDropdown from '../components/StockForecastingPage/StockDropdown';

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

      {/* Stock Dropdown Component */}
      <StockDropdown onSelect={handleSelect} selectedStock={selectedStock} />

      {/* Display Selected Stock Information */}
      {selectedStock && (
        <div style={{ marginTop: '20px' }}>
          <h2>Selected Stock:</h2>
          <p>
            Name: {selectedStock.name} <br />
            Symbol: {selectedStock.symbol}
          </p>
        </div>
      )}
    </div>
  );
};

export default StockForecastPage;