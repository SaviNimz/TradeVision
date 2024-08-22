import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChartLine, FaRegChartBar, FaRegEye } from 'react-icons/fa'; // Example icons

const Card = styled.div`
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  padding: 30px;
  max-width: 400px;
  max-height: 300px;
  margin: 20px auto;
  margin-bottom: 100px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }
`;

const Question = styled.h3`
  margin-bottom: 20px;
  text-align: center;
  color: #333;
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Option = styled.label`
  display: flex;
  align-items: center;
  margin: 10px 0;
  cursor: pointer;

  input[type="radio"] {
    display: none;
  }

  span {
    margin-left: 8px;
    font-size: 16px;
  }

  &.selected {
    background-color: #007bff;
    color: white;
    border-radius: 6px;
    padding: 0px 12px;

    &:hover {
      background-color: #0056b3;
    }
  }

  &:hover {
    background-color: #f0f0f0;
    border-radius: 6px;
  }
`;

const Icon = styled.div`
  font-size: 24px;
  color: #007bff;
`;

const SelectComponent = () => {
  const [column, setColumn] = useState('');
  const [method, setMethod] = useState('');

  const handleColumnChange = (event) => {
    setColumn(event.target.value);
  };

  const handleMethodChange = (event) => {
    setMethod(event.target.value);
  };

  return (
    <Card>
      <Question>What column do you want to forecast?</Question>
      <Select value={column} onChange={handleColumnChange}>
        <option value="">Select a column</option>
        <option value="open">Open</option>
        <option value="high">High</option>
        <option value="low">Low</option>
        <option value="close">Close</option>
        <option value="volume">Volume</option>
      </Select>
      <Question>Select forecasting model</Question>
      <OptionsContainer>
        {['ARIMA', 'Prophet', 'LSTM'].map((methodOption) => (
          <Option
            key={methodOption}
            className={method === methodOption ? 'selected' : ''}
            onClick={() => setMethod(methodOption)}
          >
            <input
              type="radio"
              value={methodOption}
              checked={method === methodOption}
              onChange={handleMethodChange}
            />
            {methodOption === 'ARIMA' && <Icon><FaChartLine /></Icon>}
            {methodOption === 'Prophet' && <Icon><FaRegChartBar /></Icon>}
            {methodOption === 'LSTM' && <Icon><FaRegEye /></Icon>}
            <span>{methodOption}</span>
          </Option>
        ))}
      </OptionsContainer>
    </Card>
  );
};

export default SelectComponent;
