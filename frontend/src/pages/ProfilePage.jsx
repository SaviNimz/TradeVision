import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ProfilePic from '../components/profilePage/ProflePic';
import WelcomeMessage from '../components/profilePage/WelcomeMessage';
import ActionButton from '../components/profilePage/Actionbutton';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const ProfilePage = () => {
  const navigate = useNavigate();

  const handleGenerateForecasts = () => {
    console.log('Navigating to /CsvForecast');
    navigate('/CsvUpload');
  };

  return (
    <Container>
      <ProfilePic />
      <WelcomeMessage userName="John Doe" />
      <ButtonContainer>
        <ActionButton label="Generate Forecasts" onClick={handleGenerateForecasts} />
        <ActionButton label="Previous Forecasts" />
      </ButtonContainer>
    </Container>
  );
};

export default ProfilePage;
