import React from 'react';
import styled from 'styled-components';
import MainChart from '../components/Dashboard_Components/MainChart';
import CompanyProfile from '../components/Dashboard_Components/CompanyProfile';
import TechnicalSignal from '../components/Dashboard_Components/TechnicalSignal';
import SearchBar from '../components/Dashboard_Components/SearchBar';

const Dashboard = () => {
  return (
    <Container>
      <SearchBar />
      <MainChart />
      <BottomContainer>
        <CompanyProfile />
        <TechnicalSignal />
      </BottomContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-top: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default Dashboard;
