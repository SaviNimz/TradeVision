import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; // Importing jest-dom for additional matchers
import Chart from '../components/StockForecastingPage/Chart';

describe('Chart Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Chart symbol="AAPL" />); // Use a sample symbol
    expect(container).toBeInTheDocument(); // Now this should work correctly
  });
});
