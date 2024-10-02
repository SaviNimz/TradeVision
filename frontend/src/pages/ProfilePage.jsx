import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaDiscord, FaEnvelope } from 'react-icons/fa';
import forecastIcon from '../assets/data-analysis.gif';
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
    const totalPredictions = 42; // Example count

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

      {/* Animated Prediction Count */}
      <PredictionSection>
        <PredictionTitle>Your Total Predictions</PredictionTitle>
        <PredictionCount>{predictionCount}</PredictionCount>
      </PredictionSection>

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

      {/* Pricing Cards Section */}
      <PricingSection>
        <PricingTitle>Upgrade Your Plan</PricingTitle>
        <PricingCards>
          <PricingCard>
            <CardTitle>30-Day Trial</CardTitle>
            <CardPrice>Free</CardPrice>
            <CardDescription>Try all premium features for 30 days.</CardDescription>
            <UpgradeButton>Start Trial</UpgradeButton>
          </PricingCard>

          <PricingCard>
            <CardTitle>1-Month Upgrade</CardTitle>
            <CardPrice>$9.99/month</CardPrice>
            <CardDescription>Unlock premium features for 1 month.</CardDescription>
            <UpgradeButton>Upgrade Now</UpgradeButton>
          </PricingCard>

          <PricingCard>
            <CardTitle>1-Year Upgrade</CardTitle>
            <CardPrice>$99.99/year</CardPrice>
            <CardDescription>Get 2 months free with the yearly plan.</CardDescription>
            <UpgradeButton>Upgrade Now</UpgradeButton>
          </PricingCard>
        </PricingCards>
      </PricingSection>

      <AccountSettingsSection>
        <Title>My Account Settings</Title>

        <Setting>
          <Label>Theme</Label>
          <RadioGroup>
            <RadioButton>
              <input type="radio" id="light" name="theme" value="Light" />
              <label htmlFor="light">Light</label>
            </RadioButton>
            <RadioButton>
              <input type="radio" id="dark" name="theme" value="Dark" />
              <label htmlFor="dark">Dark</label>
            </RadioButton>
          </RadioGroup>
        </Setting>

        <Setting>
          <Label>Email</Label>
          <SettingOption>{user.email}</SettingOption>
        </Setting>

        <Setting>
          <Label>Update Password</Label>
          <Button>Change Password</Button>
        </Setting>

        <Setting>
          <Label>Manage Subscription</Label>
          <SettingOption>No active subscription</SettingOption>
          <Button>Upgrade to Stock Analysis Pro</Button>
        </Setting>
      </AccountSettingsSection>

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
  background: linear-gradient(135deg, #f3f4f6, #ebeff2);
  min-height: 100vh;
  box-sizing: border-box;
  color: #1a202c;
`;
const Label = styled.label`
  font-size: 1.1rem;
  color: #1a202c;
`;
const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  border: 4px solid #0d6efd;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
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
  font-size: 1.6rem;
`;

const Email = styled.p`
  margin: 0;
  color: #6b7280;
  font-size: 1rem;
`;

// New Prediction Section with Animated Count
const PredictionSection = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const PredictionTitle = styled.h2`
  font-size: 1.4rem;
  color: #1a202c;
`;

const PredictionCount = styled.span`
  font-size: 3rem;
  font-weight: bold;
  color: #0d6efd;
`;

// NewCardsSection

const NewCardsSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const StyledCard = styled.div`
  flex: 1;
  margin: 10px;
  background: rgba(255, 255, 255, 0.9);
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
  width: 80px;
  margin-bottom: 20px;
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: #1a202c;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #4a5568;
`;

// Pricing Section

const PricingSection = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const PricingTitle = styled.h2`
  font-size: 1.6rem;
  color: #1a202c;
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

const PricingCard = styled.div`
  flex: 1;
  max-width: 300px;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
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
  background: #ffffff;
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

const ChatbotWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;

  ${(props) =>
    props.isBouncing &&
    css`
      animation: bounce 1.2s infinite;
    `};
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

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;
