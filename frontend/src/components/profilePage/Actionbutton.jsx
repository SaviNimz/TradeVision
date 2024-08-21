// ActionButton.js
import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: #0056b3;
  }
`;

const ActionButton = ({ label, onClick }) => {
  return <ButtonStyled onClick={onClick}>{label}</ButtonStyled>;
};

export default ActionButton;

