import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import ImageCard from '../components/profilePage/ImageCard';
import forecastIcon from '../assets/icon1.jpg';
import RetrieveIcon from '../assets/icon2.jpeg';
import profpic from '../assets/profpic.jpg';
import { auth } from '../utils/firebase';
import Chatbot from '../components/ChatBot'; 

const ProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    profilePicture: profpic,
  });

  const [isBouncing, setIsBouncing] = useState(true); 
  const [hasClicked, setHasClicked] = useState(false); // Track if it has been clicked

  useEffect(() => {
    const currentUser = auth.currentUser;
    
    if (currentUser) {
      // Set the user's display name and email from Firebase
      setUser({
        name: currentUser.displayName || 'Anonymous User',
        email: currentUser.email,
        profilePicture: currentUser.photoURL || profpic,
      });
    }
  }, []);

  const handleGenerateForecasts = () => {
    navigate('/CsvUpload');
  };

  const handleRetrieveSavedForecasts = () => {
    alert('Retrieve Saved Forecasts clicked!');
  };

  const handleChatbotClick = () => {
    if (!hasClicked) {
      setIsBouncing(false); // Stop the bounce after first click
      setHasClicked(true);  // Set flag so it doesn't bounce again
    }
  };

  return (
    <Container>
      <ProfileStrip>
        <ProfilePicture src={user.profilePicture} alt="Profile" />
        <ProfileInfo>
          <Name>{user.name}</Name>
          <Email>{user.email}</Email>
        </ProfileInfo>
      </ProfileStrip>
      
      <CardsSection>
        <ImageCard
          image={forecastIcon}
          text="Generate Forecasts"
          onClick={handleGenerateForecasts}
        />
        <ImageCard
          image={RetrieveIcon}
          text="Retrieve Saved Forecasts"
          onClick={handleRetrieveSavedForecasts}
        />
      </CardsSection>
      
      <ChatbotWrapper isBouncing={isBouncing} onClick={handleChatbotClick}>
        <Chatbot /> 
      </ChatbotWrapper>
    </Container>
  );
};

export default ProfilePage;

// Styled Components

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: linear-gradient(135deg, #0a0a23, #001f3f, #003f5c); 
  color: #ffffff;
  min-height: 100vh;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const ProfileStrip = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 20px;
  background-color: rgba(10, 10, 30, 0.85);
  border-radius: 12px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
  margin-bottom: 30px;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 15px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 90px;
  border: 3px solid #0066cc;
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.1);
    border-color: #00ccff;
  }

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

const ProfileInfo = styled.div`
  flex: 1;
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 15px;
  }
`;

const Name = styled.h2`
  margin: 5px 0;
  color: #ffffff;
  text-shadow: 0 0 10px rgba(0, 128, 255, 0.8);
  font-size: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Email = styled.p`
  margin: 0;
  color: #bbb;
`;

const CardsSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 20px;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack only in mobile view */
    gap: 20px;
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
