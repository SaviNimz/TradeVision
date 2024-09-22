import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styled from 'styled-components';
import ImageCard from '../components/profilePage/ImageCard';
import forecastIcon from '../assets/icon1.jpg';
import RetrieveIcon from '../assets/icon2.jpeg';

// ProfilePage component
const ProfilePage = () => {
  const navigate = useNavigate(); // Initialize navigate

  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    profilePicture: "https://via.placeholder.com/100", // Placeholder image
  };

  const handleGenerateForecasts = () => {
    navigate('/CsvUpload'); // Route to /CsvUpload
  };

  const handleRetrieveSavedForecasts = () => {
    alert("Retrieve Saved Forecasts clicked!"); // Placeholder logic
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
      
      <MessageContainer>
        <CardsContainer>
          <ImageCard
            image={forecastIcon} // Background image for Generate Forecasts
            text="Generate Forecasts"
            onClick={handleGenerateForecasts}
          />
          <ImageCard
            image={RetrieveIcon} // Background image for Retrieve Saved Forecasts
            text="Retrieve Saved Forecasts"
            onClick={handleRetrieveSavedForecasts}
          />
        </CardsContainer>
      </MessageContainer>
    </Container>
  );
};

export default ProfilePage;

// Styled Components

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: linear-gradient(135deg, #000000, #002f4c, #004080); 
  color: #ffffff;
  color: #ffffff;
  height: 88vh;
  box-sizing: border-box;
`;

const ProfileStrip = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: rgba(20, 20, 40, 0.9);
  border-radius: 10px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 70px;
  height: 70px;
`;

const ProfileInfo = styled.div`
  flex: 1;
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const Name = styled.h2`
  margin: 5px 0;
  color: #ffffff;
  text-shadow: 0 0 10px rgba(0, 128, 255, 0.8);
`;

const Email = styled.p`
  margin: 0;
  color: #bbb;
`;

const ChangeButton = styled.button`
  padding: 10px 20px;
  background: linear-gradient(135deg, #28a745, #21b146);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background: linear-gradient(135deg, #218838, #1e7e34);
    box-shadow: 0 0 15px rgba(40, 167, 69, 0.7);
  }

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const MessageContainer = styled.div`
  flex: 1;
  // background: linear-gradient(135deg, #000000, #002f4c, #004080); 
  // color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
