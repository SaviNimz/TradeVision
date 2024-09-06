import React from 'react';
import styled from 'styled-components';
import AdvancedChart from '../components/Dashboard_Components/MainChart';
import TickerTape from '../components/Dashboard_Components/TickerTape';
import GainersChart from '../components/Dashboard_Components/GainersChart';
import NewsComponent from '../services/NewsService';

const Dashboard = () => {
  return (
    <DashboardContainer>
      <TickerTape />
      <MainContent>
        <Title>Real Time Market Data</Title>
        <AdvancedChart />
        <GainersChart />
        <NewsComponent />
      </MainContent>
    </DashboardContainer>
  );
};

export default Dashboard;


const DashboardContainer = styled.div`
  background: linear-gradient(to bottom, #000000, #1a1a1a);  /* Neon gradient background */
  min-height: 100vh; /* Full height */
  padding: 20px;
  color: #fff; /* Ensure text is readable */
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h2`
  font-size: 36px; /* Adjust font size as needed */
  font-weight: bold; /* Make the title bold */
  margin: 0; /* Remove default margin */
  text-align: center; /* Center the title */
  color: #66ffcc; /* Bright neon color for modern look */
  text-shadow: 
    0 1px 2px rgba(0, 0, 0, 0.5), /* Subtle shadow for depth */
    0 2px 4px rgba(0, 255, 255, 0.6), /* Neon effect */
    0 3px 6px rgba(0, 255, 255, 0.4); /* Lighter neon */
  transform: perspective(500px) rotateX(5deg); /* Create a 3D effect */
`;
