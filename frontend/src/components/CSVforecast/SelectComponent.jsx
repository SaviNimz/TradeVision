import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChartLine, FaRegChartBar, FaRegEye } from 'react-icons/fa';
import { saveAs } from 'file-saver';
import Papa from 'papaparse';


const SelectComponent = ({ csvData, onForecast }) => {
  const [column, setColumn] = useState('');
  const [selectedMethods, setSelectedMethods] = useState([]);
  const [toastMessage, setToastMessage] = useState('');

  const handleColumnChange = (event) => {
    setColumn(event.target.value);
    setToastMessage(''); // Clear toast message on column change
  };

  const handleMethodChange = (method) => {
    setSelectedMethods((prevMethods) =>
      prevMethods.includes(method)
        ? prevMethods.filter((m) => m !== method)
        : [...prevMethods, method]
    );
    setToastMessage(''); // Clear toast message on method change
  };

  const handleForecast = async () => {
    if (!column || selectedMethods.length === 0) {
      setToastMessage('You need to select a Column and Model to Continue');
      return;
    }

    const payload = {
      column,
      methods: selectedMethods,
      csvData,
    };

    console.log("Payload to be sent:", payload);

    try {
      const response = await fetch('http://localhost:5000/api/forecast', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log("Forecast response:", result);

      // Send the forecast result to the parent component
      if (onForecast) {
        onForecast(result);
      }

      // Flatten the response for CSV conversion
      const flattenedData = Object.entries(result.ARIMA).map(([key, value]) => ({
        index: key,
        forecast: value,
      }));

      console.log("Flattened data for CSV:", flattenedData);

      // Convert flattened data to CSV using PapaParse
      const csv = Papa.unparse(flattenedData);
      console.log("Forecast result in CSV:", csv);
      // Trigger the file download
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      saveAs(blob, 'forecast_result.csv');
    } catch (error) {
      console.error("Error in forecasting:", error);
    }
  };

  return (
    <Card>
      {toastMessage && <Toast>{toastMessage}</Toast>}
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
  background: #1e1e2f;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6);
  padding: 20px;
  width: 320px;
  margin: 40px auto;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.8);
  }
`;

const Toast = styled.div`
  background-color: #e74c3c;
  color: white;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  text-align: center;
`;

const Question = styled.h3`
  margin-bottom: 10px;
  text-align: center;
  color: #e0e0e0;
  font-size: 18px;
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #555;
  border-radius: 6px;
  background-color: #2c2c3e;
  color: #fff;
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #4db8ff;
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
  background-color: #2c2c3e;
  transition: background-color 0.3s ease;

  input[type="checkbox"] {
    display: none;
  }

  span {
    margin-top: 8px;
    font-size: 16px;
    color: #fff;
  }

  &.selected {
    background-color: #4db8ff;
    color: white;

    &:hover {
      background-color: #3498db;
    }
  }

  &:hover {
    background-color: #353549;
  }
`;

const Icon = styled.div`
  font-size: 24px;
  color: #4db8ff;
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
