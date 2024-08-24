// src/pages/Dashboard.js
import React, { useState } from 'react';
import ForecastChart from './ForecastChart';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: 20px;
`;

const SelectContainer = styled.div`
  margin-bottom: 20px;
`;


const ForecastDashboard = ({ historicalData, forecastData, modelComparisonData }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('1 Week');
  const [selectedChartType, setSelectedChartType] = useState('Line');

  const handlePeriodChange = (event) => {
    setSelectedPeriod(event.target.value);
  };

  const handleChartTypeChange = (event) => {
    setSelectedChartType(event.target.value);
  };

  return (
    <DashboardContainer>
      <SelectContainer>
        <label>
          Forecast Period:
          <select value={selectedPeriod} onChange={handlePeriodChange}>
            <option value="1 Week">1 Week</option>
            <option value="2 Weeks">2 Weeks</option>
            <option value="1 Month">1 Month</option>
          </select>
        </label>
        <label>
          Chart Type:
          <select value={selectedChartType} onChange={handleChartTypeChange}>
            <option value="Line">Line</option>
            <option value="Area">Area</option>
          </select>
        </label>
      </SelectContainer>
      <ForecastChart 
        historicalData={historicalData} 
        forecastData={forecastData} 
        modelComparisonData={modelComparisonData} 
        selectedChartType={selectedChartType} 
      />
    </DashboardContainer>
  );
};

export default ForecastDashboard;