import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChartLine, FaRegChartBar, FaRegEye } from 'react-icons/fa';


const SelectComponent = () => {
  const [column, setColumn] = useState('');
  const [selectedMethods, setSelectedMethods] = useState([]);

  const handleColumnChange = (event) => {
    setColumn(event.target.value);
  };

  const handleMethodChange = (method) => {
    setSelectedMethods((prevMethods) =>
      prevMethods.includes(method)
        ? prevMethods.filter((m) => m !== method)
        : [...prevMethods, method]
    );
  };

  const handleForecast = () => {
    // Implement the forecast logic here
    console.log("Selected column:", column);
    console.log("Selected methods:", selectedMethods);
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
      <Question>Select forecasting model(s)</Question>
      <OptionsContainer>
        {['ARIMA', 'Prophet', 'LSTM'].map((methodOption) => (
          <Option
            key={methodOption}
            className={selectedMethods.includes(methodOption) ? 'selected' : ''}
            onClick={() => handleMethodChange(methodOption)}
          >
            <input
              type="checkbox"
              value={methodOption}
              checked={selectedMethods.includes(methodOption)}
              onChange={() => handleMethodChange(methodOption)}
            />
            {methodOption === 'ARIMA' && <Icon><FaChartLine /></Icon>}
            {methodOption === 'Prophet' && <Icon><FaRegChartBar /></Icon>}
            {methodOption === 'LSTM' && <Icon><FaRegEye /></Icon>}
            <span>{methodOption}</span>
          </Option>
        ))}
      </OptionsContainer>
      <ForecastButton onClick={handleForecast}>Forecast</ForecastButton>
    </Card>
  );
};

export default SelectComponent;

const Card = styled.div`
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  padding: 20px;
  width: 320px;
  margin: 40px auto;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }
`;

const Question = styled.h3`
  margin-bottom: 10px;
  text-align: center;
  color: #333;
  font-size: 18px;
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
  justify-content: space-around;
  margin-bottom: 20px;
`;

const Option = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  width: 90px;
  padding: 10px;
  margin: 0 5px;
  border-radius: 6px;
  transition: background-color 0.3s ease;

  input[type="checkbox"] {
    display: none;
  }

  span {
    margin-top: 8px;
    font-size: 16px;
  }

  &.selected {
    background-color: #007bff;
    color: white;

    &:hover {
      background-color: #0056b3;
    }
  }

  &:hover {
    background-color: #f0f0f0;
  }
`;

const Icon = styled.div`
  font-size: 24px;
  color: #007bff;
`;

const ForecastButton = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 20px;
  background-color: #28a745;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`;
