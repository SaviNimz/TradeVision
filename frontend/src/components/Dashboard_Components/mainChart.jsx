import React, { useEffect, useRef, memo } from 'react';
import styled from 'styled-components';

const WidgetContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  .tradingview-widget-container {
    width: 100%;
    height: 100%;
    max-width: 1200px;
    max-height: 800px;
  }
`;

function MainChart() {
  const container = useRef();

  useEffect(() => {
    const containerElement = container.current;

    // Create the script element
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "width": "100%",
      "height": "100%",
      "autosize": true,
      "symbol": "COINBASE:SOLUSD",
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": "dark",
      "style": "1",
      "locale": "en",
      "allow_symbol_change": true,
      "calendar": false,
      "support_host": "https://www.tradingview.com",
      "hide_top_toolbar": false,
      "hide_legend": false,
      "show_interval_buttons": true
    });

    containerElement.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      if (containerElement && script.parentNode) {
        containerElement.removeChild(script);
      }
    };
  }, []);

  return (
    <WidgetContainer>
      <div className="tradingview-widget-container" ref={container} />
    </WidgetContainer>
  );
}

export default memo(MainChart);