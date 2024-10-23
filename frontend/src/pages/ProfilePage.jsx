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
          <CardTitle>Generate Stock Forecasts</CardTitle>
          <CardDescription>Upload your CSV and get detailed stock forecasts.</CardDescription>
        </StyledCard>

        <StyledCard onClick={handleRetrieveSavedForecasts}>
          <CardTitle>Retrieve Past Forecasts</CardTitle>
          <CardDescription>View and analyze your previously saved forecasts.</CardDescription>
        </StyledCard>
      </NewCardsSection>
      <PredictionSectionTitle>
        Prediction and Forecast Overview
        </PredictionSectionTitle>
      <PredictionSectionContainer>
       
        <PredictionSection>
          
          <PredictionTitle>Total Predictions</PredictionTitle>
          <PredictionCount>{predictionCount + 4}</PredictionCount>
        </PredictionSection>
        <PredictionSection>
          <PredictionTitle>Used Stocks</PredictionTitle>
          <PredictionCount>{predictionCount + 3}</PredictionCount>
        </PredictionSection>
        <PredictionSection>
          <PredictionTitle>Past Forecasts</PredictionTitle>
          <PredictionCount>{predictionCount}</PredictionCount>
        </PredictionSection>
      </PredictionSectionContainer>

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: linear-gradient(235deg, #000000 0%, #002f4c 10%, rgba(0, 0, 0, 0.9) 50%, #002080 100%);
  min-height: 100vh;
  color: #ffffff;
`;
const ProfileSectionall = styled.div`


`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  margin-top: 30px;
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  border: 5px solid #0d6efd;
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

const NewCardsSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const StyledCard = styled.div`
  flex: 1;
  margin: 10px;
  background: linear-gradient(14deg, #d1d5db 0%, #95c0fe 50%, #d1d5db 100%);
  border-radius: 30px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
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

const PredictionSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 200px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const PredictionSection = styled.div`
  
  padding: 5px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const PredictionTitle = styled.h4`
  margin-bottom: 5px;
  font-size: 1.3rem;
  color: #ffffff;
`;

const PredictionCount = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
  color: #d1d5db;
`;

const PricingSection = styled.div`
  margin-bottom: 40px;
`;

const PricingTitle = styled.h2`
  text-align: center;
  font-size: 2.2rem;
  margin-bottom: 20px;
`;
const PredictionSectionTitle = styled.h2`
  text-align: center;
  font-size: 2.2rem;
  margin-top: 50px;
`;

const PricingCards = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const PricingCard1 = styled.div`
  background: linear-gradient(235deg, #fff, #eeeeff, #ffffff);
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

const PricingCard2 = styled(PricingCard1)`
  background: linear-gradient(235deg, #0d6efd, #003080, #0d6efd);
  color: #ffffff;
`;

const PricingCard3 = styled(PricingCard1)`
  background: linear-gradient(235deg, #ff9800, #ffc107, #ff9800);
  color: #ffffff;
`;

const CardPrice = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin: 10px 0;
`;

const UpgradeButton = styled(Button)`
  margin-top: 10px;
`;

const SupportSection = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const SupportText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  background: #ffffff;
  color: #0d6efd;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1.2rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0d6efd;
    color: #ffffff;
  }

  & > svg {
    margin-right: 10px;
  }
`;
