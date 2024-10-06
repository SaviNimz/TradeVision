// src/__tests__/ForecastSummary.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ForecastSummary from '../components/CSVforecast/ForecastSummary2';
import { CSVLink } from 'react-csv';

// Mock the CSVLink component from 'react-csv'
jest.mock('react-csv', () => ({
  CSVLink: ({ children }) => <a href="/mock.csv">{children}</a>,
}));

describe('ForecastSummary', () => {
  it('renders the highest and lowest prices when predictedPrices is provided', () => {
    const predictedPrices = [101.25, 98.35, 105.55, 99.75];

    render(<ForecastSummary predictedPrices={predictedPrices} />);

    // Check for the highest and lowest prices in the rendered component
    const highestPrice = screen.getByText(/Price: \$105.55/i);
    const lowestPrice = screen.getByText(/Price: \$98.35/i);

    expect(highestPrice).toBeInTheDocument();
    expect(lowestPrice).toBeInTheDocument();
  });

  it('displays a message when no predicted prices are available', () => {
    render(<ForecastSummary predictedPrices={[]} />);

    const message = screen.getByText(/No predicted prices available/i);
    expect(message).toBeInTheDocument();
  });

  it('renders the CSV download button', () => {
    const predictedPrices = [101.25, 98.35, 105.55, 99.75];

    render(<ForecastSummary predictedPrices={predictedPrices} />);

    // Check if the CSV download link is present
    const downloadButton = screen.getByText(/Download as CSV/i);
    expect(downloadButton).toBeInTheDocument();
  });
});
