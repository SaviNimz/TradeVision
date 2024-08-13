import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Data } from '../utils/data';
import debounce from 'lodash/debounce';

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  border-radius: 8px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
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
`;

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    const debouncedSearch = debounce((searchQuery) => {
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
  };

  const handleSelect = (item) => {
    setQuery(item.name); // Update the input with the selected item
    setResults([]); // Clear the dropdown
  };

  return (
    <SearchContainer>
      <Input
        ref={inputRef}
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search stocks and crypto..."
      />
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
