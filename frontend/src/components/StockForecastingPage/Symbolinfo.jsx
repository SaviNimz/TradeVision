import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const WidgetContainer = styled.div`
  padding: 16px; /* Adjust padding as needed */
`;

const SymbolInfo = ({ symbol }) => {
  const containerRef = useRef(null);
  const fullSymbol = `NASDAQ:${symbol}`;
  console.log(fullSymbol);

  useEffect(() => {
    if (!containerRef.current) return; // Ensure the containerRef is not null

    const script = document.createElement('script');
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: fullSymbol,
      width: "100%",
      locale: "en",
      colorTheme: "dark",
      isTransparent: false,
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
    <WidgetContainer>
      <div ref={containerRef} className="tradingview-widget-container__widget"></div>
    </WidgetContainer>
  );
};

export default SymbolInfo;
