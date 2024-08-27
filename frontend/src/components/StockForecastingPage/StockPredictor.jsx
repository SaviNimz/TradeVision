import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const StockPredictor = () => {
    const [stockSymbol, setStockSymbol] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [predictedPrices, setPredictedPrices] = useState([]);
    const [originalPrices, setOriginalPrices] = useState([]);
    const [dates, setDates] = useState([]);
    const [error, setError] = useState('');
  
    const handlePredict = async () => {
        try {
          const response = await fetch('http://localhost:5000/api/predict', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              stock_symbol: stockSymbol,
              start_date: startDate,
              end_date: endDate,
            }),
          });
      
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Error fetching prediction data');
          }
      
          const data = await response.json();
      
          setDates(data.dates);
          setPredictedPrices(data.predicted_prices);
          setOriginalPrices(data.original_prices);
          setError('');
        } catch (err) {
          setError(err.message);
        }
      };
      
  
    return (
      <Container>
        <h2>Stock Price Prediction</h2>
        <InputField>
          <label>Stock Symbol:</label>
          <input
            type="text"
            value={stockSymbol}
            onChange={(e) => setStockSymbol(e.target.value)}
          />
        </InputField>
        <InputField>
          <label>Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </InputField>
        <InputField>
          <label>End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </InputField>
        <button onClick={handlePredict}>Predict</button>
  
        {error && <ErrorMessage>{error}</ErrorMessage>}
  
        {dates.length > 0 && (
          <Results>
            <h3>Prediction Results</h3>
            <ul>
              {dates.map((date, index) => (
                <li key={index}>
                  <strong>{date}:</strong> Predicted: {predictedPrices[index]}, Original: {originalPrices[index]}
                </li>
              ))}
            </ul>
          </Results>
        )}
      </Container>
    );
  };
  
  export default StockPredictor;
  
  // Styled components
  const Container = styled.div`
    background-color: #1c1e22;
    color: #fff;
    padding: 20px;
    border-radius: 10px;
    width: 400px;
    margin: 0 auto;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  `;
  
  const InputField = styled.div`
    margin-bottom: 10px;
    label {
      margin-right: 10px;
    }
    input {
      padding: 5px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }
  `;
  
  const ErrorMessage = styled.div`
    color: #ff4d4f;
    margin-top: 10px;
  `;
  
  const Results = styled.div`
    margin-top: 20px;
    h3 {
      margin-bottom: 10px;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      margin-bottom: 8px;
    }
  `;