import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  margin-top: 60px;
  overflow-x: auto;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  color: #333;
`;

const TableHeader = styled.th`
  background-color: #27ae60;
  color: white;
  padding: 14px;
  border: 1px solid #ddd;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const TableCell = styled.td`
  padding: 14px;
  border: 1px solid #ddd;
  text-align: center;
  color: #333;
  background-color: rgba(255, 255, 255, 0.8);
  
  &:nth-child(even) {
    background-color: rgba(255, 255, 255, 0.6);
  }
  
  &:hover {
    background-color: #f1f1f1;
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
