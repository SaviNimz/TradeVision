/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaDiscord, FaEnvelope } from 'react-icons/fa';
import ImageCard from '../components/profilePage/ImageCard';
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

  useEffect(() => {
    const currentUser = auth.currentUser;

    if (currentUser) {
      setUser({
        name: currentUser.displayName || 'Anonymous User',
        email: currentUser.email || 'harithamihimal@gmail.com',
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
<AccountSettingsSectionAll>
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
</AccountSettingsSectionAll>
     

      <AccountSettingsSectionAll>
        <AccountSettingsSection>
          <Title>My Account</Title>

          <Setting>
            <Label>Preferences</Label>
            <SettingOption>
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
            </SettingOption>
          </Setting>

          <Setting>
            <Label>Email:</Label>
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
          <Title>Get Support</Title>
          <SupportText>
            You can reach us through the following channels:
          </SupportText>
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
      </AccountSettingsSectionAll>

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

// ... Other styled components (same as before)

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 20px;
  
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
  box-shadow: 0px 0px 15px rgba(0, 102, 204, 0.8);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    border-color: #00ccff;
    box-shadow: 0px 0px 25px rgba(0, 204, 255, 0.9);
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
  font-size: 1.8rem;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Email = styled.p`
  margin: 0;
  color: #bbb;
  font-size: 1rem;
`;

const CardsSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 5px;
  width: 90%;
  max-width: 1200px;
  max-height: 300px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;
const AccountSettingsSectionAll = styled.div`
  display: flex;
  flex-direction: row;
  background: rgba(0, 0, 0, 0.0);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  max-width: 1700px;
  gap: 20px;
  width: 98%;
  blur: 10px;
`;

const AccountSettingsSection = styled.div`
   background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 15px;
  max-width: 800px;
  gap: 20px;
  width: 100%;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

const Setting = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 1.1rem;
  color: #ffffff;
`;

const SettingOption = styled.div`
  font-size: 1rem;
  color: #bbb;
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const RadioButton = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  label {
    font-size: 1rem;
    color: #ffffff;
  }

  input[type='radio'] {
    accent-color: #0066cc;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background-color: #0066cc;
  color: #ffffff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0055aa;
  }
`;

const SupportSection = styled.div`
   background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 15px;
  max-width: 800px;
  gap: 20px;
  width: 100%;
`;

const SupportText = styled.p`
  font-size: 1rem;
  color: #bbb;
`;

const SupportLink = styled.a`
  color: #0066cc;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const ChatbotWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;

  animation: ${({ isBouncing }) => (isBouncing ? css`${bounce} 2s infinite` : 'none')};
`;


const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #ffffff;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #00ccff;
  }

  svg {
    font-size: 1.5rem;
  }
`;
