import React, { useEffect, useRef} from 'react';
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
      width: '900',
      height: '400',
      isTransparent: false,
      colorTheme: 'light',
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
