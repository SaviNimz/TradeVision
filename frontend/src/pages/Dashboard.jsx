import React, { useState } from 'react';
import styled from 'styled-components';
import AdvancedChart from '../components/Dashboard_Components/MainChart';
import SearchBar from '../components/Dashboard_Components/SearchBar';
import TickerTape from '../components/Dashboard_Components/TickerTape';
import SymbolInfo from '../components/Dashboard_Components/Symbolinfo';
import GainersChart from '../components/Dashboard_Components/GainersChart';

const Dashboard = () => {

  return (
    <div>

      <TickerTape />
      <main>
        <AdvancedChart/>
        <GainersChart/>
      </main>
    </div>
  );
};

export default Dashboard;
