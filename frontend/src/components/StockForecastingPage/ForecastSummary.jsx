import React from 'react';
import styled from 'styled-components';
import { FaDownload } from 'react-icons/fa';
import { CSVLink } from 'react-csv';

const ForecastSummary = ({ predictedPrices }) => {
    // Ensure predictedPrices is defined and contains numbers
    if (!predictedPrices || predictedPrices.length === 0) {
        return <p>No predicted prices available.</p>; // Handling for no data case
    }

    // Find the highest and lowest price
    const highest = Math.max(...predictedPrices).toFixed(2); // Round to 2 decimal places
    console.log(highest); // Log the highest price

    const lowest = Math.min(...predictedPrices).toFixed(2); // Round to 2 decimal places
    console.log(lowest); // Log the lowest price

    // Prepare CSV data with rounded prices
    const csvData = predictedPrices.map(price => ({
        Price: price.toFixed(2), // Round to 2 decimal places
    }));

    return (
        <SummaryContainer>
            <SummaryBox>
                <h2>Highest Price</h2>
                <p>Price: ${highest}</p>
            </SummaryBox>
            <SummaryBox>
                <h2>Lowest Price</h2>
                <p>Price: ${lowest}</p>
            </SummaryBox>

            {/* CSV Download Button */}
            <CSVDownloadButton>
                <FaDownload /> {/* CSV Icon */}
                <CSVLink data={csvData} filename="forecasted_prices.csv" target="_blank">
                    Download as CSV
                </CSVLink>
            </CSVDownloadButton>
        </SummaryContainer>
    );
};

export default ForecastSummary;

// Styled Components

const SummaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 220px;
    gap: 20px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    color: #ffffff;
`;

const SummaryBox = styled.div`
    background: rgba(0, 0, 0, 0.5);
    padding: 15px;
    border-radius: 8px;
    text-align: center;

    h2 {
        margin-bottom: 10px;
        font-size: 1.2rem;
    }

    p {
        margin: 5px 0;
    }
`;

const CSVDownloadButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
    font-size: 1.2rem;
    background: #004080;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;

    svg {
        font-size: 1.5rem;
    }

    a {
        color: #ffffff;
        text-decoration: none;
    }

    &:hover {
        background: #0050a0;
    }
`;
