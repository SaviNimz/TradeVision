/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import AdvancedChart from '../components/Dashboard_Components/mainChart.jsx';
import TickerTape from '../components/Dashboard_Components/TickerTape.jsx';
import GainersChart from '../components/Dashboard_Components/GainersChart.jsx';
import NewsComponent from '../services/NewsService.jsx';
import Chatbot from '../components/ChatBot';

const Dashboard = () => {
  const [isBouncing, setIsBouncing] = useState(true); // To control bounce animation
  const [hasClicked, setHasClicked] = useState(false); // To track first click

  const handleChatbotClick = () => {
    if (!hasClicked) {
      setIsBouncing(false); // Stop bouncing on first click
      setHasClicked(true); // Ensure it doesn't bounce again
    }
  };

  return (
    <DashboardContainer>
      <TickerTape />
      <MainContent>
        <AdvancedChart />
        <GainersChart />
        <NewsComponent />
      </MainContent>

      <ChatbotWrapper isBouncing={isBouncing} onClick={handleChatbotClick}>
        <Chatbot />
      </ChatbotWrapper>
    </DashboardContainer>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
  background: linear-gradient(235deg, #000000 0%, #002f4c 40%, rgba(0, 0, 0, 0.9) 80%, #002080 100%); 
  color: #ffffff;
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
  font-size: 48px; /* Increase font size for better visibility */
  font-weight: 700; /* Slightly bolder */
  margin: 0; /* Remove default margin */
  text-align: center; /* Center the title */
  background: linear-gradient(to right, #ffffff, #e0e0e0); /* Light gradient background */
  -webkit-background-clip: text; /* Clip background to text */
  -webkit-text-fill-color: transparent; /* Make text color transparent */
  animation: glowing 1.5s infinite alternate; /* Add glowing animation */
  text-shadow: 
    0 1px 5px rgba(255, 255, 255, 0.8), /* Subtle white shadow for depth */
    0 2px 10px rgba(255, 255, 255, 0.6), /* Softer shadow for a gentle glow */
    0 3px 15px rgba(0, 255, 255, 0.4); /* Light cyan highlight for a neon effect */
  transform: perspective(500px) rotateX(5deg); /* Create a 3D effect */

  /* Keyframes for glowing effect */
  @keyframes glowing {
    0% {
      text-shadow: 
        0 0 5px #ffffff,
        0 0 10px #ffffff,
        0 0 15px #e0e0e0,
        0 0 20px #e0e0e0,
        0 0 30px #e0e0e0;
    }
    100% {
      text-shadow: 
        0 0 10px #ffffff,
        0 0 20px #ffffff,
        0 0 30px #e0e0e0,
        0 0 40px #e0e0e0,
        0 0 50px #e0e0e0;
    }
  }
`;

// Keyframes for bounce animation
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

const ChatbotWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  ${({ isBouncing }) =>
    isBouncing &&
    css`
      animation: ${bounce} 2.5s infinite;
    `}
  cursor: pointer;
`;
