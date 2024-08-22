import React, { useState } from 'react';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaFileCsv } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import ErrorMessage from './ErrorMessage';

const FileUploadCard = ({ onUploadSuccess }) => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [errorModalOpen, setErrorModalOpen] = useState(false);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
            const fileType = selectedFile.type;

            if (fileType !== 'text/csv' && fileType !== 'application/vnd.ms-excel') {
                toast.error('Only CSV files are accepted.', {
                    autoClose: 1500,
                });
                return;
            }

            setFile(selectedFile);
            setMessage('');
            toast.success('File added successfully!', {
                autoClose: 1500,
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

    const handleUploadClick = async () => {
        if (!file) {
            setMessage('Please select a file.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('http://localhost:5000/api/CSVupload', {
                method: 'POST',
                body: formData,
            });

            // There is no need to call the backend again ( find a way to not use this way)
            const data = await response.json();

            if (response.ok) {
                toast.success('File uploaded successfully!', {
                    autoClose: 1500,
                });
                onUploadSuccess(data.data); // Pass the CSV data to the parent component
            } else {
                const errorMessage = data.error || 'An unknown error occurred.';
                setErrorMessage(errorMessage);
                toast.error(errorMessage, {
                    autoClose: 1500,
                });
                setErrorModalOpen(true);
            }
        } catch (error) {
            setErrorMessage('An error occurred while uploading the file.');
            setErrorModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setErrorModalOpen(false);
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
            {errorModalOpen && (
                <ErrorMessage message={errorMessage} onClose={handleCloseModal} />
            )}
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
    color: #2c3e50;
`;

const Input = styled.input`
    margin-bottom: 15px;
    border: 2px solid #2980b9;
    border-radius: 8px;
    padding: 12px;
    width: 100%;
    font-size: 1rem;
    transition: border-color 0.3s;

    &:focus {
        border-color: #1c6691;
        outline: none;
    }
`;

const UploadButton = styled.button`
    background-color: #27ae60;
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
        background-color: #219653;
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
    color: #27ae60;
`;

const CloseIcon = styled(AiOutlineClose)`
    margin-left: 10px;
    font-size: 1.5rem;
    color: #c0392b;
    cursor: pointer;

    &:hover {
        color: #a93226;
    }
`;
