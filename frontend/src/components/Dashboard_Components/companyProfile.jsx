import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const WidgetContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px; /* Max width to avoid excessive enlargement on larger screens */
  height: auto;
  padding: 1rem; /* Padding to ensure it doesn’t touch the edges of the viewport */

  .tradingview-widget-container {
    width: 100%;
    height: 100%;
    max-width: 100%; /* Ensures the widget doesn’t exceed the container’s width */
    max-height: 600px; /* Max height to ensure it’s not too large on smaller screens */
  }

  @media (max-width: 600px) {
    .tradingview-widget-container {
      max-width: 100%;
      height: auto;
      max-height: 400px; /* Adjusting height for smaller screens */
    }
  }
`;

const CompanyProfile = ({ symbol }) => {
  const container = useRef(null);

  useEffect(() => {
    console.log('Symbol changed:', symbol);

    const containerElement = container.current;
    if (!containerElement) return;

    // Remove existing script if it exists
    const existingScript = containerElement.querySelector('script');
    if (existingScript) {
      containerElement.removeChild(existingScript);
    }

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
      symbol: symbol || 'NASDAQ:AAPL', // Use the symbol prop, default to 'NASDAQ:AAPL' if not provided
      locale: 'en',
    });

    containerElement.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      if (containerElement && script.parentNode) {
        containerElement.removeChild(script);
      }
    };
  }, [symbol]); // Add symbol as a dependency

  return (
    <WidgetContainer>
      <div className="tradingview-widget-container" ref={container} />
      <div className="tradingview-widget-copyright">
        {/* Optional: Add any required copyright or attribution here */}
      </div>
    </WidgetContainer>
  );
};

export default CompanyProfile;
