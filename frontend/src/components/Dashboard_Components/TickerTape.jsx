import React, { useEffect } from 'react';
import styled from 'styled-components';

function TickerTape() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "NASDAQ:TSLA", description: "" },
        { proName: "NASDAQ:AAPL", description: "" },
        { proName: "NASDAQ:NVDA", description: "" },
        { proName: "NASDAQ:MSFT", description: "" },
        { proName: "NASDAQ:AMZN", description: "" },
        { proName: "NASDAQ:GOOGL", description: "" },
        { proName: "NASDAQ:META", description: "" },
        { proName: "NYSE:BRK.B", description: "" },
        { proName: "NYSE:LLY", description: "" },
        { proName: "NYSE:UNH", description: "" },
        { proName: "NYSE:V", description: "" },
        { proName: "NYSE:WMT", description: "" },
      ],
      showSymbolLogo: true,
      colorTheme: "dark",
      isTransparent: false,
      displayMode: "adaptive",
      locale: "en",
    });
    document.querySelector("#ticker-tape .tradingview-widget-container").appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.querySelector("#ticker-tape .tradingview-widget-container").innerHTML = "";
    };
  }, []); // Ensure it runs only once

  return (
    <TickerTapeContainer id="ticker-tape">
      <div className="tradingview-widget-container">
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </TickerTapeContainer>
  );
}

export default TickerTape;


const TickerTapeContainer = styled.nav`
  width: 100%;
  margin-bottom: 32px;
  margin-top: 32px;
  padding: 0 16px; /* Add padding from left and right */
  border-radius: 40px; /* Round corners */
  background-color: rgba(255, 255, 255, 0.1); /* Optional: Add a background color */
`;