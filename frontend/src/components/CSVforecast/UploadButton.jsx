import React, { useState } from 'react';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaFileCsv } from 'react-icons/fa'; // Importing a CSV file icon
import { AiOutlineClose } from 'react-icons/ai'; // Importing a close icon

const FileUploadCard = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
            const fileType = selectedFile.type;

            // Check if the uploaded file is a CSV
            if (fileType !== 'text/csv' && fileType !== 'application/vnd.ms-excel') {
                toast.error('Only CSV files are accepted.', {
                    autoClose: 1500, // Toast message duration
                });
                return;
            }

            setFile(selectedFile);
            setMessage('');
            toast.success('File uploaded successfully!', {
                autoClose: 1500, // Toast message duration
            });
        }
    };

    const handleRemoveFile = () => {
        setFile(null);
        setMessage('');
        toast.info('File removed.', {
            autoClose: 1500, 
        });
    };

    const handleUploadClick = () => {
        if (!file) {
            setMessage('Please select a file.');
        } else {
            toast.info('Upload Successful !', {
                autoClose: 1500, 
            }); 
        }
    };

    return (
        <Card>
            <Title>Upload CSV File</Title>
            {!file && (
                <Input type="file" accept=".csv" onChange={handleFileChange} />
            )}
            {file && (
                <FileInfoContainer>
                    <FileIcon />
                    <FileInfo>{file.name}</FileInfo>
                    <CloseIcon onClick={handleRemoveFile} />
                </FileInfoContainer>
            )}
            <UploadButton onClick={handleUploadClick}>Upload</UploadButton>
            {message && <Message>{message}</Message>}
            <ToastContainer />
        </Card>
    );
};

export default FileUploadCard;

const Card = styled.div`
    width: 400px;
    padding: 35px;
    border: 1px solid #eaeaea;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f9f9f9;
    transition: box-shadow 0.3s;

    &:hover {
        box-shadow: 0 6px 24px rgba(0, 0, 0, 0.15);
    }
`;

const Title = styled.h3`
    margin: 0 0 20px;
    font-size: 1.8rem;
    color: #2c3e50; // A darker shade for professionalism
`;

const Input = styled.input`
    margin-bottom: 15px;
    border: 2px solid #2980b9; // A blue color for a financial theme
    border-radius: 8px;
    padding: 12px;
    width: 100%;
    font-size: 1rem;
    transition: border-color 0.3s;

    &:focus {
        border-color: #1c6691; // A darker blue for focus
        outline: none;
    }
`;

const UploadButton = styled.button`
    background-color: #27ae60; // A modern green color
    color: white;
    border: none;
    border-radius: 8px;
    padding: 15px 30px;
    cursor: pointer;
    font-size: 1.2rem;
    transition: background-color 0.3s;
    width: 100%;
    margin-top: 25px;
    &:hover {
        background-color: #219653; // A slightly darker green on hover
    }
`;

const FileInfoContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 15px;
`;

const FileInfo = styled.div`
    margin-left: 10px;
    font-size: 1rem;
    color: #7f8c8d; 
`;

const FileIcon = styled(FaFileCsv)`
font-size: 3rem;
    color: #27ae60; // Match the green theme
`;

const CloseIcon = styled(AiOutlineClose)`
    margin-left: 10px;
    font-size: 1.5rem;
    color: #c0392b; // A more muted red for the close icon
    cursor: pointer;

    &:hover {
        color: #a93226; // A darker shade for hover effect
    }
`;
