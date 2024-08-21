import React, { useState } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: url('your-image-url.jpg') no-repeat center center fixed; /* Replace with your image URL */
  background-size: cover;
  filter: blur(5px);
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.7); /* Slightly more opaque overlay for better visibility */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UploadButton = styled.button`
  padding: 20px 40px;
  font-size: 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 20px;
  font-size: 1.2rem;
`;

const CsvForecastPage = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type !== 'text/csv') {
        setErrorMessage('Only CSV files are valid');
      } else {
        setErrorMessage('');
        // Handle the CSV file upload (e.g., parse the file)
        console.log('CSV file uploaded:', file);
      }
    }
  };

  return (
    <PageContainer>
      <Overlay>
        <input
          type="file"
          accept=".csv"
          style={{ display: 'none' }}
          id="csv-upload"
          onChange={handleFileUpload}
        />
        <label htmlFor="csv-upload">
          <UploadButton>Upload CSV</UploadButton>
        </label>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Overlay>
    </PageContainer>
  );
};

export default CsvForecastPage;
