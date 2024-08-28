import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';
import styled from 'styled-components';
import { FaChartLine, FaCalendar, FaTags } from 'react-icons/fa';

const ChartContainer = styled.div`
  background-color: rgba(28, 28, 47, 0.6); /* Slightly translucent dark background */
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(255, 255, 255, 0.3); /* Slightly light white shadow */
  margin: 20px auto; /* Center the chart container */
  max-width: 90%; /* Allow the chart to be responsive */
  overflow: hidden; /* Hide any overflow */
  display: flex; /* Use flexbox for centering */
  flex-direction: column; /* Stack elements vertically */
  align-items: center; /* Center children horizontally */
`;


const ControlPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px; /* Increased gap for better spacing */
  align-items: flex-start; /* Align items to the left */
  margin-bottom: 40px; /* Increased margin for spacing */

  label {
    display: flex;
    align-items: center; /* Centering icon and label */
    font-weight: bold;
    color: #f0f4f8; /* Light color for text */
    margin-left: 15px; /* Added left margin for alignment */

    svg {
      margin-right: 10px; /* Space between icon and text */
      color: #007bff; /* Icon color */
    }
  }

  input, select {
    padding: 8px;
    border: 1px solid #444; /* Dark border */
    border-radius: 5px;
    transition: border-color 0.3s;
    background-color: #2e2e4d; /* Dark input background */
    color: #f0f4f8; /* Light input text */
    margin-left: 25px; /* Added left margin for alignment */

    &:focus {
      border-color: #007bff;
      outline: none;
    }
  }

  button {
    padding: 16px 18px; /* Increased padding */
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-left: 15px; /* Added left margin for alignment */

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const StockChart = ({ stockType }) => { // Accept stockType as a prop
  const [stockData, setStockData] = useState(null);
  const [dateRange, setDateRange] = useState({ start: '2020-01-01', end: '2024-01-01' });
  const [chartType, setChartType] = useState('line'); // Default chart type
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  const fetchStockData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`/api/v8/finance/chart/${stockType}?period1=${Math.floor(new Date(dateRange.start).getTime() / 1000)}&period2=${Math.floor(new Date(dateRange.end).getTime() / 1000)}&interval=1d`);
      const data = response.data.chart.result[0];

      if (data && data.indicators && data.indicators.quote[0].close) {
        const timestamps = data.timestamp.map(ts => new Date(ts * 1000).toLocaleDateString());
        const prices = data.indicators.quote[0].close;

        // Check for valid prices
        const validPrices = prices.filter(price => price !== null); // Remove null values
        const validTimestamps = timestamps.slice(0, validPrices.length); // Adjust timestamps accordingly

        setStockData({
          x: validTimestamps,
          y: validPrices,
          type: chartType, // Use the selected chart type
          mode: chartType === 'line' ? 'lines' : undefined, // Only show lines for line chart
          line: { color: 'white' }, // Set line color to white
        });
      } else {
        setError('No data available for the selected stock and date range.');
      }
    } catch (error) {
      setError('Error fetching stock data: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStockData(); // Fetch data on mount
  }, [dateRange, stockType, chartType]);

  return (
    <ChartContainer>
      <h2 style={{ color: '#f0f4f8' }}>Stock Chart</h2>
      <ControlPanel>
        <label>
          <FaTags /> Stock Type:
          <input type="text" value={stockType} readOnly /> {/* Display the stock type */}
        </label>
        <label>
          <FaCalendar /> Start Date:
          <input type="date" value={dateRange.start} onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })} />
        </label>
        <label>
          <FaCalendar /> End Date:
          <input type="date" value={dateRange.end} onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })} />
        </label>
        <label>
          <FaChartLine /> Chart Type:
          <select value={chartType} onChange={(e) => setChartType(e.target.value)}>
            <option value="line">Line</option>
            <option value="bar">Bar</option>
            <option value="scatter">Scatter</option>
            <option value="candlestick">Candlestick</option>
            <option value="area">Area</option>
          </select>
        </label>
      </ControlPanel>
      
      {loading && <p style={{ color: '#f0f4f8' }}>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      {stockData && (
        <Plot
          data={[stockData]}
          layout={{
            title: {
              text: `${stockType} Stock Prices`,
              font: { color: '#f0f4f8' },
            },
            xaxis: {
              title: 'Date',
              showgrid: false,
              zeroline: false,
              visible: false, // Hide x-axis labels
            },
            yaxis: {
              title: 'Price',
              rangemode: 'tozero',
              titlefont: { color: '#f0f4f8' }, // Y-axis title color
              tickfont: { color: '#f0f4f8' }, // Y-axis tick color
            },
            height: 400, // Set a fixed height for responsiveness
            width: '100%', // Make width 100% for responsiveness
            margin: { t: 40, r: 20, b: 40, l: 50 },
            paper_bgcolor: '#1c1c2f', // Dark background
            plot_bgcolor: '#1c1c2f', // Dark background for plot
          }}
          config={{ responsive: true }} // Enable responsive behavior
        />
      )}
    </ChartContainer>
  );
};

export default StockChart;
