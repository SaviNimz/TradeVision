import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Data } from '../../utils/data';
import debounce from 'lodash/debounce';
import { FaSearch } from 'react-icons/fa';

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px; /* Constrain width for large screens */
  margin: 0 auto; /* Center horizontally */
  padding: 0 15px; /* Padding for small screens */

  @media (max-width: 768px) {
    max-width: 400px; /* Reduce width for tablet screens */
  }

  @media (max-width: 480px) {
    max-width: 100%; /* Full width for mobile screens */
    padding: 0 10px; /* Add some side padding */
  }
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0 10px;
  transition: border-color 0.3s ease;

  &:focus-within {
    border-color: #007bff;
  }

  @media (max-width: 480px) {
    padding: 0 8px; /* Adjust padding for mobile screens */
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 12px 10px;
  border: none;
  outline: none;
  font-size: 16px;
  border-radius: 8px;

  @media (max-width: 768px) {
    padding: 10px 8px; /* Slightly reduce padding for tablets */
    font-size: 15px; /* Adjust font size for tablets */
  }

  @media (max-width: 480px) {
    padding: 8px 6px; /* Reduce padding for mobile */
    font-size: 14px; /* Adjust font size for mobile */
  }
`;

const SearchIcon = styled(FaSearch)`
  color: #888;
  font-size: 18px;
  margin-right: 8px;

  @media (max-width: 480px) {
    font-size: 16px; /* Adjust icon size for mobile */
    margin-right: 6px; /* Reduce space between icon and input */
  }
`;

const Dropdown = styled.ul`
  position: absolute;
  width: 100%;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #ddd;
  max-height: 300px;
  overflow-y: auto;
  z-index: 10;
  list-style-type: none;
  margin: 0;
  padding: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    max-height: 200px; /* Reduce max-height for mobile */
  }
`;

const DropdownItem = styled.li`
  padding: 12px 15px;
  cursor: pointer;
  font-size: 16px;
  color: #333;

  &:hover {
    background-color: #f5f5f5;
  }

  &:active {
    background-color: #e0e0e0;
  }

  @media (max-width: 768px) {
    font-size: 15px; /* Adjust font size for tablets */
    padding: 10px 12px; /* Adjust padding for tablets */
  }

  @media (max-width: 480px) {
    font-size: 14px; /* Adjust font size for mobile */
    padding: 8px 10px; /* Adjust padding for mobile */
  }
`;

const SearchBar = ({ onSelect }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    console.log('Query changed:', query); // Log the query value

    const debouncedSearch = debounce((searchQuery) => {
      console.log('Debounced query:', searchQuery); // Log the debounced query value

      if (searchQuery.length > 2) {
        const filteredResults = Data.filter(item =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.symbol.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setResults(filteredResults);
      } else {
        setResults([]);
      }
    }, 300); // Debounce delay in milliseconds

    debouncedSearch(query);

    return () => {
      debouncedSearch.cancel();
    };
  }, [query]);

  const handleChange = (e) => {
    setQuery(e.target.value);
    console.log('Input changed:', e.target.value); // Log the input change
  };

  const handleSelect = (item) => {
    setQuery(item.name); // Update the input with the selected item
    setResults([]); // Clear the dropdown
    if (onSelect) {
      onSelect(item); // Pass selected item to parent
    }
  };

  return (
    <SearchContainer>
      <InputWrapper>
        <SearchIcon />
        <Input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search stocks and crypto..."
        />
      </InputWrapper>
      {results.length > 0 && (
        <Dropdown>
          {results.map((item) => (
            <DropdownItem key={item.id} onClick={() => handleSelect(item)}>
              {item.name} ({item.symbol})
            </DropdownItem>
          ))}
        </Dropdown>
      )}
    </SearchContainer>
  );
};

export default SearchBar;
