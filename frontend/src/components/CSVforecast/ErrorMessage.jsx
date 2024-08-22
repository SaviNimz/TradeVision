// ErrorMessage.js
import React from 'react';
import styled from 'styled-components';

const ErrorMessage = ({ message, onClose }) => {
    return (
        <ErrorModal>
            <ModalContent>
                <h4>Error</h4>
                <p>{message}</p>
                <CloseButton onClick={onClose}>Close</CloseButton>
            </ModalContent>
        </ErrorModal>
    );
};

export default ErrorMessage;

const ErrorModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    width: 300px;
`;

const CloseButton = styled.button`
    margin-top: 15px;
    background-color: #c0392b;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    cursor: pointer;

    &:hover {
        background-color: #a93226; // A darker shade for hover effect
    }
`;
