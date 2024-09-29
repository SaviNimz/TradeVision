import React, { useState } from 'react';
import FeedbackForm from '../components/FeedbackPage/FeedbackForm';
import FeedbackList from '../components/FeedbackPage/FeedbackList';
import styled, { css, keyframes } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Chatbot from '../components/ChatBot'; 

const FeedBackPage = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [isBouncing, setIsBouncing] = useState(true); 
  const [hasClicked, setHasClicked] = useState(false); // Track if it has been clicked

  const handleFeedbackSubmit = (feedback) => {
    setFeedbacks([feedback, ...feedbacks]);
  };

  const handleChatbotClick = () => {
    if (!hasClicked) {
      setIsBouncing(false); // Stop the bounce after first click
      setHasClicked(true);  // Set flag so it doesn't bounce again
    }
  };

  return (
    <PageContainer>
      <FeedbackForm onSubmit={handleFeedbackSubmit} />
      <ToastContainer /> 

      <ChatbotWrapper isBouncing={isBouncing} onClick={handleChatbotClick}>
        <Chatbot /> 
      </ChatbotWrapper>
    </PageContainer>
  );
};

export default FeedBackPage;

const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  background: linear-gradient(135deg, #000000, #002f4c, #004080);
  color: #ffffff;
  min-height: 84vh;

  @media (max-width: 768px) {
    flex-direction: column; /* Adjust for mobile view */
  }
`;

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
