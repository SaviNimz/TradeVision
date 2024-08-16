import React, { useState } from 'react';
import styled from 'styled-components';
import MainChart from '../components/Dashboard_Components/MainChart';
import CompanyProfile from '../components/Dashboard_Components/CompanyProfile';
import TechnicalSignal from '../components/Dashboard_Components/TechnicalSignal';
import SearchBar from '../components/Dashboard_Components/SearchBar';

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleQueryChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <Container>
      <SearchBar onQueryChange={handleQueryChange} />
      <StyledMainChart /> {/* Use the renamed styled component */}
      <BottomContainer>
        <CompanyProfile query={searchQuery} /> {/* Pass the search query as a prop */}
        <TechnicalSignal />
      </BottomContainer>
    </Container>
  );
};

// Renamed styled component to avoid conflict
const StyledMainChart = styled(MainChart)`
  width: 100%;
  height: 100vh; /* Increased height for better visibility */
  max-height: 800px; /* Optional: set a max height */
  background: #000; /* Placeholder background for visualization */
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh; /* Ensure it takes the full viewport height */
  padding: 16px;
  box-sizing: border-box;
  background: linear-gradient(135deg, #1a1a2e, #162447); /* Dark gradient background */
  color: #fff; /* Ensure text is readable on dark background */
  align-items: center; /* Center horizontally */
  justify-content: flex-start; /* Align items to the top */
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-top: 16px;
  width: 100%; /* Ensure it takes full width of its parent */
  align-items: stretch; /* Ensure items stretch to fit the container */

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px; /* Adjust gap for mobile view */
    align-items: center; /* Center items in mobile view */
  }
`;

export default Dashboard;
