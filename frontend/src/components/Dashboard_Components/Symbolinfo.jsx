import React, { useEffect } from 'react';
import styled from 'styled-components';

const SymbolInfoContainer = styled.section`
  grid-column: span 2;
  margin-top: 32px;
`;


function SymbolInfo() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: "NASDAQ:AAPL",
      width: "100%",
      locale: "en",
      colorTheme: "dark",
      isTransparent: true,
    });
    document.querySelector("#symbol-info .tradingview-widget-container").appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.querySelector("#symbol-info .tradingview-widget-container").innerHTML = "";
    };
  }, []); // Ensure it runs only once

  return (
    <SymbolInfoContainer id="symbol-info">
      <div className="tradingview-widget-container">
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </SymbolInfoContainer>
  );
}

export default SymbolInfo;
