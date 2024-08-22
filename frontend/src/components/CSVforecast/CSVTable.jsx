import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  max-height: 500px; // Reduced max-height for smaller tables
  overflow-y: auto;
  margin-bottom: 16px;
  padding: 0 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Subtle shadow for a modern look

  /* Custom scrollbar styles */
  &::-webkit-scrollbar {
    width: 8px; // Smaller scrollbar width
  }

  &::-webkit-scrollbar-track {
    background: rgba(240, 240, 240, 0.8);
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(34, 193, 195, 0.6);
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(34, 193, 195, 0.8);
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 20px;
  margin-top: 8px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 13px; // Smaller font size for compactness
  color: #444;

  @media (max-width: 768px) {
    font-size: 11px; // Further reduce font size for smaller screens
  }
`;

const TableHeader = styled.th`
  background-color: #1abc9c;
  color: white;
  padding: 8px;
  border: 1px solid #ccc;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 0.04em;

  @media (max-width: 768px) {
    padding: 6px; // Reduced padding for smaller screens
  }
`;

const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #ccc;
  text-align: center;
  color: #333;
  background-color: rgba(255, 255, 255, 0.9);
  
  &:nth-child(even) {
    background-color: rgba(240, 240, 240, 0.7);
  }
  
  &:hover {
    background-color: rgba(200, 200, 200, 0.3);
  }

  @media (max-width: 768px) {
    padding: 6px; // Reduced padding for smaller screens
  }
`;

const CSVTable = ({ data }) => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <TableHeader>Date</TableHeader>
            <TableHeader>Open</TableHeader>
            <TableHeader>High</TableHeader>
            <TableHeader>Low</TableHeader>
            <TableHeader>Close</TableHeader>
            <TableHeader>Volume</TableHeader>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <TableCell>{row.Date}</TableCell>
              <TableCell>{row.Open}</TableCell>
              <TableCell>{row.High}</TableCell>
              <TableCell>{row.Low}</TableCell>
              <TableCell>{row.Close}</TableCell>
              <TableCell>{row.Volume}</TableCell>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default CSVTable;
