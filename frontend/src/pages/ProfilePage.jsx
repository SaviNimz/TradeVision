import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ImageCard from '../components/profilePage/ImageCard';
import forecastIcon from '../assets/icon1.jpg';
import RetrieveIcon from '../assets/icon2.jpeg';

const ProfilePage = () => {
  const navigate = useNavigate();

  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    profilePicture: "https://via.placeholder.com/100",
  };

  const handleGenerateForecasts = () => {
    navigate('/CsvUpload');
  };

  const handleRetrieveSavedForecasts = () => {
    alert("Retrieve Saved Forecasts clicked!");
  };

  return (
    <Container>
      <ProfileStrip>
        <ProfilePicture src={user.profilePicture} alt="Profile" />
        <ProfileInfo>
          <Name>{user.name}</Name>
          <Email>{user.email}</Email>
        </ProfileInfo>
        <ChangeButton>Change Account Details</ChangeButton>
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
  width: 90px;
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

const ChangeButton = styled.button`
  padding: 10px 25px;
  background: linear-gradient(135deg, #28a745, #21b146);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background: linear-gradient(135deg, #218838, #1e7e34);
    box-shadow: 0 0 20px rgba(40, 167, 69, 0.8);
  }

  @media (max-width: 768px) {
    margin-top: 15px;
    padding: 8px 20px;
  }
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
