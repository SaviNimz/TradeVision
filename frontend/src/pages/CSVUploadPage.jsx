import React, { useState } from 'react';
import FileUploadCard from '../components/CSVforecast/UploadButton';
import CSVTable from '../components/CSVforecast/CSVTable';
import SelectComponent from '../components/CSVforecast/SelectComponent';
import styled from 'styled-components';
import bgimg from '../assets/forecast page.jpg';

const ForecastPageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 88vh;
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
  max-height: 600px; // Adjust this value as needed
  overflow-y: auto;  // Enables vertical scrolling if content exceeds max height
  flex: 3; // Use 3/4 of the screen for the table
  padding: 20px; // Add padding to the table

  @media (max-width: 768px) {
    order: 1;
    margin-bottom: 20px; // Space between table and card in mobile view
  }
`;

const CardContainer = styled.div`
  flex: 1; // Use 1/4 of the screen for the card
  padding: 20px; // Add padding to the card

  @media (max-width: 768px) {
    order: 2;
  }
`;

const CSVUploadPage = () => {
    const [csvData, setCsvData] = useState([]);

    const handleUploadSuccess = (data) => {
        setCsvData(data); // Store the CSV data in the state
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
                            <SelectComponent /> {/* Render the SelectComponent inside the card */}
                        </CardContainer>
                    </>
                )}
            </ForegroundContent>
        </ForecastPageContainer>
    );
};

export default CSVUploadPage;
