// StockDropdown.test.js

import React from 'react';
import { render } from '@testing-library/react';
import StockDropdown from '../components/StockForecastingPage/StockDropdown';

describe('StockDropdown', () => {
  test('renders without crashing', () => {
    // Render the StockDropdown component without props
    render(<StockDropdown />);

    // If we reach this point without throwing an error, the test passes
    expect(true).toBe(true);
  });
});
