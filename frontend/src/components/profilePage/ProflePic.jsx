// ProfilePic.js
import React from 'react';
import styled from 'styled-components';

const PicContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #ccc; // Placeholder for profile picture
  margin: 20px auto;
`;

const EditProfileButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  font-size: 16px;
`;

const ProfilePic = () => {
  return (
    <>
      <PicContainer />
      <EditProfileButton>Edit Profile</EditProfileButton>
    </>
  );
};

export default ProfilePic;
