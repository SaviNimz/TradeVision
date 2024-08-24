import React from 'react';
import styled from 'styled-components';
import ProfilePic from './ProfilePic';
import WelcomeMessage from './WelcomeMessage';

const CardContainer = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileCard = () => {
  return (
    <CardContainer>
      <ProfilePic />
      <WelcomeMessage userName="John Doe" />
    </CardContainer>
  );
};

export default ProfileCard;
