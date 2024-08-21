import React, { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const CsvUploadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #f4f7fc;
  overflow: hidden;
`;

const UploadCard = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
`;

const FileInput = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;

  &::file-selector-button {
    padding: 10px 20px;
    background-color: #007bff;
    border: none;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const UploadButton = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;

  &:hover {
    background-color: #218838;
  }
`;

const CsvUpload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile.type === "text/csv") {
            setFile(selectedFile);
            toast.success("CSV file selected successfully.");
        } else {
            toast.error("Please upload a valid CSV file.");
        }
    };

    const handleSubmit = () => {
        if (file) {
            // Implement the logic to upload the file to the backend
            toast.success("CSV file uploaded successfully.");
        } else {
            toast.error("No file selected.");
        }
    };

    return (
        <CsvUploadContainer>
            <UploadCard>
                <FileInput
                    type="file"
                    accept=".csv"
                    onChange={handleFileChange}
                />
                <UploadButton onClick={handleSubmit}>Upload</UploadButton>
            </UploadCard>
        </CsvUploadContainer>
    );
};

export default CsvUpload;