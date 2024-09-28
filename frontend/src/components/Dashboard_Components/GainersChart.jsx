import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const GainersChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 20px;

  @media (min-width: 1024px) {
    
    padding: 20px;
    height: 600px;
  }

  @media (max-width: 1023px) {
    height: 600px;
  }
`;

const GainersChartInnerContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const GainersChart = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const widgetContainer = containerRef.current;

    if (widgetContainer && !widgetContainer.querySelector('script')) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        "colorTheme": "dark",
        "dateRange": "12M",
        "exchange": "US",
        "showChart": true,
        "locale": "en",
        "width": "100%",
        "height": "100%",
        "largeChartUrl": "",
        "isTransparent": false,
        "showSymbolLogo": false,
        "showFloatingTooltip": false,
        "plotLineColorGrowing": "rgba(41, 98, 255, 1)",
        "plotLineColorFalling": "rgba(41, 98, 255, 1)",
        "gridLineColor": "rgba(240, 243, 250, 0)",
        "scaleFontColor": "rgba(209, 212, 220, 1)",
        "belowLineFillColorGrowing": "rgba(41, 98, 255, 0.12)",
        "belowLineFillColorFalling": "rgba(41, 98, 255, 0.12)",
        "belowLineFillColorGrowingBottom": "rgba(41, 98, 255, 0)",
        "belowLineFillColorFallingBottom": "rgba(41, 98, 255, 0)",
        "symbolActiveColor": "rgba(41, 98, 255, 0.12)"
      });

      widgetContainer.appendChild(script);
    }
  }, []);

  return (
    <GainersChartContainer>
      <GainersChartInnerContainer ref={containerRef}>
        <div className="tradingview-widget-container__widget"></div>
      </GainersChartInnerContainer>
    </GainersChartContainer>
  );
};

export default GainersChart;
