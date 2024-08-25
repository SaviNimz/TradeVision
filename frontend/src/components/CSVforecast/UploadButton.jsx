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

            const data = await response.json();

            if (response.ok) {
                toast.success('File uploaded successfully!', {
                    autoClose: 1500,
                });
                onUploadSuccess(data.data); 
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
    border: 1px solid #444;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 128, 255, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    background: linear-gradient(135deg, rgba(10, 10, 30, 0.9), rgba(30, 30, 60, 0.9));
    transition: box-shadow 0.3s;

    &:hover {
        box-shadow: 0 6px 24px rgba(0, 0, 0, 0.6);
    }
`;

const Title = styled.h3`
    margin: 0 0 20px;
    font-size: 1.8rem;
    color: #ffffff;
    text-shadow: 0 0 10px rgba(0, 128, 255, 0.8);
`;

const Input = styled.input`
    margin-bottom: 15px;
    border: 2px solid #666;
    border-radius: 8px;
    padding: 12px;
    width: 100%;
    font-size: 1rem;
    background-color: rgba(20, 20, 40, 0.9);
    color: #ffffff;
    transition: border-color 0.3s;

    &::placeholder {
        color: #bbb;
    }

    &:focus {
        border-color: #007bff;
        outline: none;
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
`;

const UploadButton = styled.button`
    background: linear-gradient(135deg, #28a745, #21b146);
    color: white;
    border: none;
    border-radius: 8px;
    padding: 15px 30px;
    cursor: pointer;
    font-size: 1.2rem;
    transition: background-color 0.3s, box-shadow 0.3s;
    width: 100%;
    margin-top: 25px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background: linear-gradient(135deg, #218838, #1e7e34);
        box-shadow: 0 0 15px rgba(40, 167, 69, 0.7);
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
    color: #ffffff;
`;

const FileIcon = styled(FaFileCsv)`
    font-size: 3rem;
    color: #28a745;
`;

const CloseIcon = styled(AiOutlineClose)`
    margin-left: 10px;
    font-size: 1.5rem;
    color: #db4437;
    cursor: pointer;

    &:hover {
        color: #c13527;
    }
`;
