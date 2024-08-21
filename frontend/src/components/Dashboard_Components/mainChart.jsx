import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';

const AdvancedChartContainer = styled.section`
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

const TradingViewWidget = React.memo(({ symbol }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;

    const handleScriptLoad = () => {
      new window.TradingView.widget({
        autosize: true,
        symbol: symbol || 'NASDAQ:AAPL',
        interval: 'D',
        timezone: 'Etc/UTC',
        theme: 'dark',
        style: '1',
        locale: 'en',
        hide_side_toolbar: false,
        allow_symbol_change: true,
        container_id: 'tradingview_ae7da',
      });
    };

    document.querySelector("#advanced-chart .tradingview-widget-container").appendChild(script);
    script.onload = handleScriptLoad;

    // Cleanup function to remove the script when the component unmounts
    return () => {
      const container = document.querySelector("#advanced-chart .tradingview-widget-container");
      if (container && script) {
        container.removeChild(script); // Only run if container exists
      }
    };
  }, [symbol]);

  return <div id="tradingview_ae7da" style={{ height: '100%', width: '100%' }} />;
});

function AdvancedChart() {
  // You can also pass other props if needed
  const symbol = useMemo(() => 'NASDAQ:AAPL', []);

  return (
    <AdvancedChartContainer id="advanced-chart">
      <ChartDiv className="tradingview-widget-container" style={{ width: '100%' }}>
        <TradingViewWidget symbol={symbol} />
      </ChartDiv>
    </AdvancedChartContainer>
  );
}

export default AdvancedChart;
