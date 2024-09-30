/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import FeedbackForm from '../components/FeedbackPage/FeedbackForm.jsx';
import FeedbackList from '../components/FeedbackPage/FeedbackList.jsx';
import styled, { css, keyframes } from 'styled-components'; // Import css and keyframes
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BackgroundImage from '../assets/image.png';
import Icon1 from '../assets/dependability.png';
import Icon2 from '../assets/Safeandsecure.webp';
import Icon3 from '../assets/Regulated.jpeg';
import Icon4 from '../assets/247support.avif';
import Chatbot from '../components/ChatBot'; // Import the Chatbot component

const FeedBackPage = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [isBouncing, setIsBouncing] = useState(true); // Control bounce effect
  const [hasClicked, setHasClicked] = useState(false); // Stop bounce after clicking

  const handleFeedbackSubmit = (feedback) => {
    setFeedbacks([feedback, ...feedbacks]);
    toast.success("Feedback submitted successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleChatbotClick = () => {
    if (!hasClicked) {
      setIsBouncing(false);
      setHasClicked(true);
    }
  };

  const features = [
    {
      icon: Icon1,
      title: 'Dependable',
      description: 'Our 99.97% uptime ensures your uninterrupted access to the markets.',
    },
    {
      icon: Icon2,
      title: 'Safe and secure',
      description: 'We keep your personal data and funds safe.',
    },
    {
      icon: Icon3,
      title: 'Regulated',
      description: 'We’re regulated and licensed by global financial authorities.',
    },
    {
      icon: Icon4,
      title: '24/7 support',
      description: 'Our professional multilingual team is here for you anytime.',
    },
  ];

  return (
    <PageContainer>
      <ContentWrapperAll>
        <ContentWrapper>
          <FeatureContainer>
            {features.map((feature, index) => (
              <FeatureCard key={index}>
                <Icon src={feature.icon} alt={feature.title} />
                <Title>{feature.title}</Title>
                <Description>{feature.description}</Description>
              </FeatureCard>
            ))}
          </FeatureContainer>
        </ContentWrapper>
        <ContentWrapper>
          <Header>We Value Your Feedback!</Header>
          <FeedbackForm onSubmit={handleFeedbackSubmit} />
          {/* <FeedbackList feedbacks={feedbacks} /> */}
        </ContentWrapper>
      </ContentWrapperAll>
      <ToastContainer />

      {/* Add Chatbot */}
      <ChatbotWrapper isBouncing={isBouncing} onClick={handleChatbotClick}>
        <Chatbot />
      </ChatbotWrapper>
    </PageContainer>
  );
};

export default FeedBackPage;

// Styled Components
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

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background: url(${BackgroundImage}) no-repeat center center fixed;
  background-size: cover;
  color: #ffffff;
  min-height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const ContentWrapper = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 15px;
  max-width: 800px;
  gap: 20px;
  width: 100%;
`;

const ContentWrapperAll = styled.div`
  display: flex;
  flex-direction: row;
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  max-width: 1700px;
  gap: 30px;
  width: 100%;
`;

const Header = styled.h1`
  text-align: center;
  margin-bottom: 60px;
  font-size: 2.5em;
  color: #f9f9f9;
  font-family: 'Arial', sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
`;

const FeatureContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
`;

const FeatureCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease, background-color 0.4s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    background-color: #ffffff;
  }
`;

const Icon = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
`;

const Title = styled.h3`
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
`;
