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
  flex-direction: column;
  align-items: center;
`;

const TableContainer = styled.div`
  max-height: 300px; // Adjust this value as needed
  overflow-y: auto;  // Enables vertical scrolling if content exceeds max height
  margin-bottom: 20px; // Space between table and select component
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
                  <FileUploadCard onUploadSuccess={handleUploadSuccess} />
              )}
              {csvData.length > 0 && (
                  <>
                      <TableContainer>
                          <CSVTable data={csvData} />
                      </TableContainer>
                      <SelectComponent /> {/* Render the SelectComponent below the table */}
                  </>
              )}
          </ForegroundContent>
        </ForecastPageContainer>
    );
};

export default CSVUploadPage;
