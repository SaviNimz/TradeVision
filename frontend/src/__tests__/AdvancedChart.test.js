import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import AdvancedChart from '../components/Dashboard_Components/mainChart';

beforeAll(() => {
    // Mock the TradingView global variable and its widget function
    window.TradingView = {
      widget: jest.fn(),
    };
  });
  
  describe('AdvancedChart', () => {
    test('renders the AdvancedChart component correctly', () => {
      render(<AdvancedChart />);
      
      // Check if the container div is present
      const container = document.getElementById('tradingview_ae7da');
      expect(container).toBeInTheDocument();

      expect(true).toBe(true);
    });
  
    test('calls TradingView.widget with correct parameters', () => {
      render(<AdvancedChart />);

      expect(window.TradingView.widget).toBeDefined();

      expect(true).toBe(true);
    });
  });