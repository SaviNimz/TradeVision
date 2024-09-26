/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import AdvancedChart from '../components/Dashboard_Components/mainChart.jsx';
import TickerTape from '../components/Dashboard_Components/TickerTape.jsx';
import GainersChart from '../components/Dashboard_Components/GainersChart.jsx';
import NewsComponent from '../services/NewsService.jsx';

const Dashboard = () => {
  return (
    <DashboardContainer>
      <TickerTape />
      <MainContent>
        <Title>Real-Time Market Data</Title>
        <Section>
          <SectionTitle>Market Overview</SectionTitle>
          <Description>This chart displays real-time stock market data with advanced charting tools to analyze trends and patterns in the market.</Description>
          <AdvancedChart />
        </Section>

        <Section>
          <SectionTitle>Top Gainers</SectionTitle>
          <Description>The top-performing stocks based on percentage gains for the current day.</Description>
          <GainersChart />
        </Section>

        <Section>
          <SectionTitle>Latest Financial News</SectionTitle>
          <Description>Stay updated with the latest news and updates in the financial world to make informed trading decisions.</Description>
          <NewsComponent />
        </Section>
      </MainContent>
    </DashboardContainer>
  );
};

export default Dashboard;

// Styled components
const DashboardContainer = styled.div`
  background: linear-gradient(to bottom, #000000, #0d0d0d);  /* Sleek dark gradient */
  min-height: 100vh;
  padding: 20px;
  color: #ffffff; 
`;

const MainContent = styled.main`
  background: linear-gradient(135deg, #0a0a0a, #1a1a2e, #162447); 
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.6);
`;

const Title = styled.h2`
  font-size: 42px;
  font-weight: bold;
  margin: 0 0 30px;
  text-align: center;
  color: #ffffff; 
  text-shadow: 
    0 1px 2px rgba(0, 0, 0, 0.5),
    0 2px 4px rgba(0, 255, 255, 0.5),
    0 3px 6px rgba(0, 255, 255, 0.3);
  transform: perspective(500px) rotateX(5deg); 
`;

const Section = styled.section`
  background: #0e0e0e;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
`;

const SectionTitle = styled.h3`
  font-size: 28px;
  color: #00ffff; 
  margin-bottom: 10px;
  text-align: center;
`;

const Description = styled.p`
  font-size: 16px;
  color: #cccccc;
  text-align: center;
  margin-bottom: 20px;
  line-height: 1.5;
`;
