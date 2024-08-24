import React from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  display: flex;
  padding: 20px;
  background-color: #121212;
  color: #ffffff;
  height: 83vh;
`;

const ProfileCard = styled.div`
  flex: 1;
  background-color: #1e1e1e;
  border-radius: 10px;
  padding: 20px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;

const Name = styled.h2`
  margin: 10px 0;
`;

const Email = styled.p`
  margin: 5px 0;
`;

const ChangeButton = styled.button`
  margin-top: auto;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const MessageContainer = styled.div`
  flex: 2;
  background-color: #1e1e1e;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Message = styled.h3`
  margin-bottom: 20px;
  text-align: center;
`;

const ActionButton = styled.button`
  width: 200px;       // Fixed width
  height: 50px;       // Fixed height
  margin: 10px 0;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  line-height: 50px;  // Center the text vertically

  &:hover {
    background-color: #1976d2;
  }
`;

// ProfilePage component
const ProfilePage = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    profilePicture: "https://via.placeholder.com/100", // Placeholder image
  };

  return (
    <Container>
      <ProfileCard>
        <ProfilePicture src={user.profilePicture} alt="Profile" />
        <Name>{user.name}</Name>
        <Email>{user.email}</Email>
        <ChangeButton>Change Account Details</ChangeButton>
      </ProfileCard>
      <MessageContainer>
        <Message>
          This is your profile page. Here you can generate forecasts, save and retrieve your previous forecasts.
        </Message>
        <ActionButton>Generate Forecasts</ActionButton>
        <ActionButton>Retrieve Saved Forecasts</ActionButton>
      </MessageContainer>
    </Container>
  );
};

export default ProfilePage;
