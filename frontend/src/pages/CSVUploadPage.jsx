import React, { useState } from 'react';
import FileUploadCard from '../components/CSVforecast/UploadButton';
import CSVTable from '../components/CSVforecast/CSVTable';
import SelectComponent from '../components/CSVforecast/SelectComponent';
import ForecastedPricesChart from '../components/StockForecastingPage/ForecastedPricesChart';
import ForecastSummary from '../components/StockForecastingPage/ForecastSummary';
import styled from 'styled-components';
import bgimg from '../assets/forecast page.jpg';

const CSVUploadPage = () => {
  const [csvData, setCsvData] = useState([]);
  const [forecastResult, setForecastResult] = useState(null); // To store forecast result

  // Handle CSV file upload
  const handleUploadSuccess = (data) => {
    setCsvData(data); // Store the CSV data in the state
    console.log(data); // Log the CSV data to the console
  };

  const handleForecastResult = (result) => {
    // Extract only the forecast values from the result
    const cleanedForecast = result.map(item => item.forecast); // Get array of forecast values

    // Set the cleaned forecast result to the state
    setForecastResult(cleanedForecast);
    
    console.log("Received cleaned forecast result:", cleanedForecast);
  };

  return (
    <ForecastPageContainer>
      <BackgroundBlur />
      <ForegroundContent>
        {csvData.length === 0 && (
          <CardContainer>
            <FileUploadCard onUploadSuccess={handleUploadSuccess} />
          </CardContainer>
        )}
        {csvData.length > 0 && (
          <>
            <TableContainer>
              <CSVTable data={csvData} />
            </TableContainer>
            <CardContainer>
              <SelectComponent csvData={csvData} onForecast={handleForecastResult} />
            </CardContainer>
          </>
        )}

        {/* Display forecast results */}
        {forecastResult && (
          <ForecastResultContainer>
            <ChartContainer>
              {/* Pass forecasted prices to ForecastedPricesChart */}
              <ForecastedPricesChart predictedPrices={forecastResult} />
            </ChartContainer>
            <SummaryContainer>
              {/* Pass forecasted prices to ForecastSummary */}
              {/* <ForecastSummary predictedPrices={forecastResult} /> */}
            </SummaryContainer>
          </ForecastResultContainer>
        )}
      </ForegroundContent>
    </ForecastPageContainer>
  );
};

export default CSVUploadPage;

// Styled Components

const ForecastPageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
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
  filter: blur(8px);
  z-index: 0;
`;

const ForegroundContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TableContainer = styled.div`
  max-height: 600px;
  overflow-y: auto;
  flex: 3;
  padding: 20px;

  @media (max-width: 768px) {
    order: 1;
    margin-bottom: 20px;
  }
`;

const CardContainer = styled.div`
  flex: 1;
  padding: 20px;

  @media (max-width: 768px) {
    order: 2;
  }
`;

const ForecastResultContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
`;

const ChartContainer = styled.div`
  width: 100%;
  max-width: 700px;
  margin-bottom: 20px;
`;

const SummaryContainer = styled.div`
  width: 100%;
  max-width: 700px;
`;
