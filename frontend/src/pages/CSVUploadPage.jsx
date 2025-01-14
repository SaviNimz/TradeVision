/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import FileUploadCard from '../components/CSVforecast/UploadButton.jsx';
import SelectComponent from '../components/CSVforecast/SelectComponent.jsx';
import ForecastedPricesChart from '../components/StockForecastingPage/ForecastedPricesChart.jsx';
import ForecastSummary from '../components/CSVforecast/ForecastSummary2.jsx'; 
import styled, { keyframes } from 'styled-components';
import bgimg from '../assets/forecast page.jpg';
import { FaCheck, FaSpinner } from 'react-icons/fa'; // Import FaCheck and FaSpinner

const CSVUploadPage = () => {
  const [csvData, setCsvData] = useState([]);
  const [forecastResult, setForecastResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUploadSuccess = (data) => {
    setCsvData(data);
    console.log(data);
  };

  const handleForecastResult = async (result) => {
    setLoading(true); // Set loading to true before processing
    // Simulate a delay to see the loading animation
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const cleanedForecast = result.map((item) => item.forecast);
    setForecastResult(cleanedForecast);
    console.log('Received cleaned forecast result:', cleanedForecast);
    setLoading(false); // Set loading to false after processing
  };

  return (
    <PageWrapper>
      <BackgroundOverlay />
      <ContentWrapper>
        <HeaderSection>
          <h1>CSV Stock Forecast</h1>
          <p>Upload your CSV file and get detailed stock price predictions.</p>
        </HeaderSection>

        <CardContainer>
          {csvData.length === 0 ? (
            <FileUploadCard onUploadSuccess={handleUploadSuccess} />
          ) : (
            <SelectComponent csvData={csvData} onForecast={handleForecastResult} />
          )}
        </CardContainer>

        {forecastResult && (
          <ForecastSection>
            <ChartContainer>
              <ForecastedPricesChart predictedPrices={forecastResult} />
            </ChartContainer>
            <SummaryContainer>
              <ForecastSummary predictedPrices={forecastResult} />
            </SummaryContainer>
          </ForecastSection>
        )}
      </ContentWrapper>

      {loading && (
        <LoadingOverlay>
          <Spinner>
            <FaSpinner className="spinner" />
            <LoadingMessage>Generating forecast...</LoadingMessage>
          </Spinner>
        </LoadingOverlay>
      )}
    </PageWrapper>
  );
};
export default CSVUploadPage;

// Styled components

const PageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 84vh;
  padding: 10px;
  background-color: #0f2027;
  color: white;
  overflow: hidden;
  
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${bgimg});
  background-size: cover;
  background-position: center;
  z-index: 1;
  filter: blur(5px) brightness(0.5);
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 10000px;
  width: 100%; /* Ensure full width */
  padding: 20px;
  gap: 20px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 15px;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.6);

  @media (max-width: 768px) {
    padding: 10px; /* Adjust padding for smaller screens */
  }
  }
`;

const HeaderSection = styled.div`
  text-align: center;
  color: #f0f0f0;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    background: linear-gradient(90deg, #00f260, #0575e6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.1rem;
    color: #c0c0c0;
  }
`;

const CardContainer = styled.div`
  width: 100%;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    padding: 10px; /* Reduce padding for smaller screens */
  }
`;

const ForecastSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;

  @media (max-width: 768px) {
    padding: 10px; /* Reduce padding for smaller screens */
  }
`;

const ChartContainer = styled.div`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.4);
  max-height: 600px; /* Increased max height */
  min-height: 300px; /* Set a minimum height */
  overflow: hidden;

  @media (max-width: 768px) {
    max-height: 300px; /* Adjust for smaller screens */
  }
`;

const SummaryContainer = styled.div`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.4);
  overflow-y: auto;
  max-height: 400px; /* Set max height */
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  display: flex; /* Add flex display */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */

  @media (max-width: 768px) {
    max-height: 400px; /* Adjust for smaller screens */
  }
`;

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const Spinner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .spinner {
    font-size: 4rem;
    color: #ffffff;
    animation: spin 2s infinite linear;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingMessage = styled.div`
  margin-top: 20px;
  font-size: 1.5rem;
  color: #ffffff;
`;
