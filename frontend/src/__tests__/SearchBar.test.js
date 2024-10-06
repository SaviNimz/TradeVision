import '@testing-library/jest-dom';  // Correct import
import React from 'react';
import { render } from '@testing-library/react';
import SearchBar from '../components/Dashboard_Components/searchBar';

test('renders SearchBar component without crashing', () => {
  const { getByPlaceholderText } = render(<SearchBar />);
  const inputElement = getByPlaceholderText(/search stocks and crypto.../i);
  expect(inputElement).toBeInTheDocument();
});
