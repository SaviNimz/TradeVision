import React from 'react';
import FileUploadCard from '../components/CSVforecast/UploadButton';
import styled from 'styled-components';
import bgimg from '../assets/forecast page.jpg';

const ForecastPageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 88vh;
  overflow: hidden; /* Prevent overflow from the blurred background */
`;

const BackgroundBlur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${bgimg}); 
  background-size: cover;
  background-position: center;
  filter: blur(8px); /* Adjust the blur intensity */
  z-index: 0; /* Send the background behind other components */
`;

const ForegroundContent = styled.div`
  position: relative; /* Ensure content is above the blurred background */
  z-index: 1; /* Bring child elements in front */
`;

const CSVUploadPage = () => {
  return (
    <ForecastPageContainer>
      <BackgroundBlur />
      <ForegroundContent>
        <FileUploadCard />
      </ForegroundContent>
    </ForecastPageContainer>
  );
};

export default CSVUploadPage;