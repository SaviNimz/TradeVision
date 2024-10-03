import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Importing jest-dom for additional matchers
import ForecastedPricesChart from '../components/StockForecastingPage/ForecastedPricesChart';

jest.mock('react-chartjs-2', () => {
    return {
      Line: () => <canvas data-testid="line-chart" />,
    };
  });
  
  describe('ForecastedPricesChart', () => {
    it('renders the chart with predicted prices', () => {
      const predictedPrices = [100, 101, 102, 103, 104];
      
      render(<ForecastedPricesChart predictedPrices={predictedPrices} />);
  
      const chart = screen.getByTestId('line-chart');
      expect(chart).toBeInTheDocument();
    });
  
    it('displays a message when no forecast data is available', () => {
      render(<ForecastedPricesChart predictedPrices={[]} />);
  
      const message = screen.getByText(/No forecast data available/i);
      expect(message).toBeInTheDocument();
    });
  });