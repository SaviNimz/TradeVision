import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const ChartContainer = styled.section`
  grid-column: span 2;
  height: 600px;
  padding: 0 16px; /* Add padding from left and right */

  @media (max-width: 768px) {
    height: 600px;
  }
`;

const ChartDiv = styled.div`
  height: 100%;
`;

const Chart = ({ symbol }) => {
  const containerRef = useRef(null);
  const fullSymbol = `NASDAQ:${symbol}`;

  useEffect(() => {
    if (!containerRef.current) return; // Ensure the containerRef is not null

    const script = document.createElement('script');
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: fullSymbol,
      interval: "D",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "3",
      locale: "en",
      hide_top_toolbar: true,
      allow_symbol_change: false,
      save_image: false,
      calendar: false,
      hide_volume: true,
      support_host: "https://www.tradingview.com"
    });

    containerRef.current.appendChild(script);

    // Cleanup function to clear innerHTML and avoid memory leaks
    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = ''; // Clear only if ref is still valid
      }
    };
  }, [fullSymbol]);

  return (
    <ChartContainer>
      <ChartDiv ref={containerRef} className="tradingview-widget-container__widget"></ChartDiv>
    </ChartContainer>
  );
};

export default Chart;
