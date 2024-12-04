import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; 
import styled from 'styled-components';

// Helper function to generate future dates
const generateFutureDates = (n) => {
  const dates = [];
  const currentDate = new Date();
  for (let i = 1; i <= n; i++) {
    const nextDate = new Date();
    nextDate.setDate(currentDate.getDate() + i); // Start from the day after today
    dates.push(nextDate.toISOString().split('T')[0]); // Format as YYYY-MM-DD
  }
  return dates;
};

const ForecastedPricesChart = ({ predictedPrices }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (predictedPrices && predictedPrices.length > 0) {
      const futureDates = generateFutureDates(predictedPrices.length);

      // Set up the data for the chart
      const data = {
        labels: futureDates, // x-axis: future dates
        datasets: [
          {
            label: 'Predicted Closing Stock Prices',
            data: predictedPrices, // y-axis: predicted prices
            fill: false,
            borderColor: 'rgba(75, 192, 192, 1)', // Line color
            tension: 0.1,
          },
        ],
      };

      setChartData(data);
    }
  }, [predictedPrices]);

  return (
    <ChartContainer>
      {chartData ? (
        <Line data={chartData} />
      ) : (
        <p>No forecast data available</p>
      )}
    </ChartContainer>
  );
};

export default ForecastedPricesChart;

// Styled component for the chart container
const ChartContainer = styled.div`
  width: 90%; /* Responsive width, adjusts to screen size */
  max-width: 700px; /* Limit the width on larger screens */
  margin: 0 auto;
  padding: 10px;
  margine-left: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  color: white;

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px;
    font-size: 14px; /* Adjust text size for small screens */
  }
`;
