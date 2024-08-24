import React from 'react';
import { Data } from '../../utils/data';

const StockDropdown = ({ onSelect, selectedStock }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <label htmlFor="stock-select">Select a stock:</label>
      <select
        id="stock-select"
        onChange={(e) => {
          const selectedId = parseInt(e.target.value, 10);
          const selectedItem = Data.find(item => item.id === selectedId);
          onSelect(selectedItem);
        }}
        value={selectedStock ? selectedStock.id : ''}
      >
        <option value="">-- Choose a stock --</option>
        {Data.map(item => (
          <option key={item.id} value={item.id}>
            {item.name} ({item.symbol})
          </option>
        ))}
      </select>
    </div>
  );
};

export default StockDropdown;
