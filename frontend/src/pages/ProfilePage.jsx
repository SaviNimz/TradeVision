/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaDiscord, FaEnvelope } from 'react-icons/fa';
import forecastIcon from '../assets/full-analysis.gif';
import RetrieveIcon from '../assets/full-analysis.gif';
import profpic from '../assets/profpic.jpg';
import { auth } from '../utils/firebase';
import Chatbot from '../components/ChatBot';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: 'harithamihimal@gmail.com',
    profilePicture: profpic,
  });
  const [isBouncing, setIsBouncing] = useState(true);
  const [hasClicked, setHasClicked] = useState(false);
  
  // State for predictions
  const [predictionCount, setPredictionCount] = useState(0);

  useEffect(() => {
    const currentUser = auth.currentUser;

    if (currentUser) {
      setUser({
        name: currentUser.displayName || 'Anonymous User',
        email: currentUser.email || 'harithamihimal@gmail.com',
        profilePicture: currentUser.photoURL || profpic,
      });
    }

    // Animate prediction count
    let startCount = 0;
    const totalPredictions = 10; // Example count

    const interval = setInterval(() => {
      if (startCount < totalPredictions) {
        setPredictionCount((prevCount) => prevCount + 1);
        startCount += 1;
      } else {
        clearInterval(interval);
      }
    }, 50); // Speed of count animation
  }, []);

  const handleGenerateForecasts = () => {
    navigate('/CsvUpload');
  };

  const handleRetrieveSavedForecasts = () => {
    alert('Retrieve Saved Forecasts clicked!');
  };

  const handleChatbotClick = () => {
    if (!hasClicked) {
      setIsBouncing(false);
      setHasClicked(true);
    }
  };

  return (
    <Container>
      <ProfileSection>
        <ProfilePicture src={user.profilePicture} alt="Profile" />
        <ProfileInfo>
          <Name>Hi, {user.name} 👋</Name>
          <Email>{user.email}</Email>
        </ProfileInfo>
      </ProfileSection>

    
      <NewCardsSection>
        <StyledCard onClick={handleGenerateForecasts}>
          <CardImage src={forecastIcon} alt="Forecast Icon" />
          <CardTitle>Generate Stock Forecasts</CardTitle>
          <CardDescription>Upload your CSV and get detailed stock forecasts.</CardDescription>
        </StyledCard>

        <StyledCard onClick={handleRetrieveSavedForecasts}>
          <CardImage src={RetrieveIcon} alt="Retrieve Icon" />
          <CardTitle>Retrieve Past Forecasts</CardTitle>
          <CardDescription>View and analyze your previously saved forecasts.</CardDescription>
        </StyledCard>
      </NewCardsSection>
  {/* Animated Prediction Count */}
  <PredictionSectionContainer>
      <PredictionSection>
        <PredictionTitle>Total Predictions</PredictionTitle>
        <PredictionCount>{predictionCount+4}</PredictionCount>
      </PredictionSection>
      <PredictionSection>
        <PredictionTitle>Used Stocks</PredictionTitle>
        <PredictionCount>{predictionCount+3}</PredictionCount>
      </PredictionSection>
      <PredictionSection>
        <PredictionTitle>Past Forecasts</PredictionTitle>
        <PredictionCount>{predictionCount}</PredictionCount>
      </PredictionSection>
      </PredictionSectionContainer>
      {/* Pricing Cards Section */}
      <PricingSection>
        <PricingTitle>Upgrade Your Plan</PricingTitle>
        <PricingCards>
          <PricingCard1>
            <CardTitle>30-Day Trial</CardTitle>
            <CardPrice>Free</CardPrice>
            <CardDescription>Try all premium features for 30 days.</CardDescription>
            <UpgradeButton>{user.profilePicture ? 'Continue Trial' : 'Start Trial'}</UpgradeButton>

          </PricingCard1>

          <PricingCard2>
            <CardTitle>1-Month Upgrade</CardTitle>
            <CardPrice>$9.99/month</CardPrice>
            <CardDescription>Unlock premium features for 1 month.</CardDescription>
            <UpgradeButton>Upgrade Now</UpgradeButton>
          </PricingCard2>

          <PricingCard3>
            <CardTitle>1-Year Upgrade</CardTitle>
            <CardPrice>$99.99/year</CardPrice>
            <CardDescription>Unlock premium features for 1 year.</CardDescription>
            <UpgradeButton>Upgrade Now</UpgradeButton>
          </PricingCard3>
        </PricingCards>
      </PricingSection>

   

      <SupportSection>
        <Title>Need Help?</Title>
        <SupportText>Reach out to us on any of the following platforms:</SupportText>
        <SocialLinks>
          <SocialLink href="https://wa.me/your-number" target="_blank">
            <FaWhatsapp /> WhatsApp
          </SocialLink>
          <SocialLink href="https://facebook.com/your-page" target="_blank">
            <FaFacebookF /> Facebook
          </SocialLink>
          <SocialLink href="https://instagram.com/your-handle" target="_blank">
            <FaInstagram /> Instagram
          </SocialLink>
          <SocialLink href="https://discord.com/invite/your-invite" target="_blank">
            <FaDiscord /> Discord
          </SocialLink>
          <SocialLink href="mailto:support@stockanalysis.com">
            <FaEnvelope /> Email
          </SocialLink>
        </SocialLinks>
      </SupportSection>

       {/* Add Chatbot */}
       <ChatbotWrapper isBouncing={isBouncing} onClick={handleChatbotClick}>
        <Chatbot />
      </ChatbotWrapper>
    </Container>
  );
};

export default ProfilePage;

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

const Button = styled.button`
  background-color: #0d6efd;
  border: none;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0a58ca;
  }
`;
const SettingOption = styled.div`
  margin-top: 10px;
  font-size: 1rem;
  color: #4a5568;
`;
const RadioGroup = styled.div`
  display: flex;
  gap: 20px;
`;

const RadioButton = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  label {
    font-size: 1rem;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: linear-gradient(235deg, #000000 0%, #002f4c 10%, rgba(0, 0, 0, 0.9) 50%, #002080 100%); 
  min-height: 100vh;
  box-sizing: border-box;
  color: #ffffff;
`;
const Label = styled.label`
  font-size: 1.1rem;
  color: #ffffff;
`;
const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin-bottom: 30px;
  margin-top: 30px;
  margin-left: 30px;
  
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  border: 5px solid #0d6efd;
  box-shadow: 0 4px 10px rgba(10, 10, 10, 10);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const ProfileInfo = styled.div`
  margin-left: 20px;
  
`;

const Name = styled.h2`
  margin: 0;
  font-size: 2.6rem;
`;

const Email = styled.p`
  margin: 0;
  color: #6b7280;
  font-size: 1rem;
`;

// New Prediction Section with Animated Count
const PredictionSectionContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  gap: 100px; /* Adjust the value to your desired gap size */
  margin-bottom: 2px;
`;


const PredictionSection = styled.div`
  text-align: center;
  margin-bottom: 4px;
  padding: 20px;
  gap: 40px;
`;

const PredictionTitle = styled.h2`
  font-size: 1.8rem;
  color: #ffffff;
`;

const PredictionCount = styled.span`
  font-size: 3rem;
  font-weight: bold;
  color: #d0e3ff;
`;

// NewCardsSection

const NewCardsSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const StyledCard = styled.div`
  flex: 1;
  margin: 10px;
  background: linear-gradient(14deg, #ffffff 0%, #95c0fe 50%, #ffffff 100%);
  border-radius: 12px;
  padding: 20px;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.img`
  width: 100px;
  margin-bottom: 0px;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #000;
`;

const CardDescription = styled.p`
  font-size: 1.2rem;
  color: #4a5568;
`;

// Pricing Section

const PricingSection = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const PricingTitle = styled.h2`
  font-size: 1.6rem;
  color: #ffffff;
`;

const PricingCards = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const PricingCard1 = styled.div`
  flex: 1;
  max-width: 300px;
background: linear-gradient(90deg, #a1c4fd 0%, #a1c4fd, #a1c4fd);
  background-size: 300% 300%; /* Ensure the gradient is large enough to move */
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  animation: shine 3s infinite ease-in-out; /* Updated duration for a visible effect */

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  @keyframes shine {
    0% {
      background-position: 10% ;
    }
    50% {
      background-position: 100% ;
    }
    100% {
      background-position: 10% ;
    }
  }
`;

const PricingCard2 = styled.div`
  flex: 1;
  max-width: 300px;
background: linear-gradient(90deg, #f2f2f2 0%, #d9d9d9, #ffffff);
  background-size: 300% 300%; /* Ensure the gradient is large enough to move */
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  animation: shine 3s infinite ease-in-out; /* Updated duration for a visible effect */

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  @keyframes shine {
    0% {
      background-position: 0% ;
    }
    50% {
      background-position: 100% ;
    }
    100% {
      background-position: 0% ;
    }
  }
`;

const PricingCard3 = styled.div`
  flex: 1;
  max-width: 300px;
background: linear-gradient(90deg, #fff4e0 0%, #ffd700, #daa520);
  background-size: 300% 300%; /* Ensure the gradient is large enough to move */
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  animation: shine 3s infinite ease-in-out; /* Updated duration for a visible effect */

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  @keyframes shine {
    0% {
      background-position: 0% ;
    }
    50% {
      background-position: 100% ;
    }
    100% {
      background-position: 0% ;
    }
  }
`;



const CardPrice = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  color: #0d6efd;
`;

const UpgradeButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #0d6efd;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0a58ca;
  }
`;

// Support Section

const SupportSection = styled.div`
  margin-top: 40px;
  padding: 20px;
  background: #cfe3ff;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
`;

const SupportText = styled.p`
  font-size: 1rem;
  color: #4a5568;
  margin-bottom: 20px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
  color: #1a202c;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #0d6efd;
  }
`;



const AccountSettingsSection = styled.div`
  padding: 20px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3`
  margin-bottom: 20px;
  font-size: 1.4rem;
  color: #1a202c;
`;

const Setting = styled.div`
  margin-bottom: 20px;
`;
