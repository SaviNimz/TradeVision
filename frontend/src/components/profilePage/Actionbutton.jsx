// Button.js
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #008CBA;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  margin: 10px;
`;

const ActionButton = ({ label }) => {
  return <StyledButton>{label}</StyledButton>;
};

export default ActionButton;
