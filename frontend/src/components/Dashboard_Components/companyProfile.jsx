import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const WidgetContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;  // Max width to avoid excessive enlargement on larger screens
  height: auto;
  padding: 1rem;  // Padding to ensure it doesn’t touch the edges of the viewport

  .tradingview-widget-container {
    width: 100%;
    height: 100%;
    max-width: 100%;  // Ensures the widget doesn’t exceed the container’s width
    max-height: 600px; // Max height to ensure it’s not too large on smaller screens
  }

  // Ensuring the widget is centered and does not overflow
  @media (max-width: 600px) {
    .tradingview-widget-container {
      max-width: 100%;
      height: auto;
      max-height: 400px; // Adjusting height for smaller screens
    }
  }
`;

const CompanyProfile = () => {
  const container = useRef(null);

  useEffect(() => {
    const containerElement = container.current;

    // Create the script element
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: '100%',
      height: '100%',
      isTransparent: false,
      colorTheme: 'dark',
      symbol: 'NASDAQ:AAPL',
      locale: 'en',
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
      <div className="tradingview-widget-copyright">
      </div>
    </WidgetContainer>
  );
};

export default CompanyProfile;
