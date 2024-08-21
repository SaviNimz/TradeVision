import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

function TechnicalSignal() {
  const container = useRef(null);

  useEffect(() => {
    const containerElement = container.current;

    // Create the script element
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = JSON.stringify({
      interval: '1m',
      width: '425',
      isTransparent: false,
      height: '450',
      symbol: 'NASDAQ:AAPL',
      showIntervalTabs: true,
      displayMode: 'single',
      locale: 'en',
      colorTheme: 'dark',
    });

    if (containerElement) {
      containerElement.appendChild(script);
    }

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

export default TechnicalSignal;

const WidgetContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:  70vw;
  height: 50vh;
  padding: 1rem;  // Padding to ensure it doesn’t touch the viewport edges

  .tradingview-widget-container {
    width: 100%;
    height: 100%;
    max-width: 100%; // Ensures the widget does not exceed the container’s width
    max-height: 100%; // Ensures the widget does not exceed the container’s height
  }

  // Media query to handle smaller screens
  @media (max-width: 768px) {
    padding: 0.5rem;  // Reduce padding on smaller screens
  }

  @media (max-width: 480px) {
    .tradingview-widget-container {
      height: 300px;  // Adjust height for very small screens
    }
  }
`;
