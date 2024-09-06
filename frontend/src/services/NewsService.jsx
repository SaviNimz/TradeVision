import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const NewsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const WidgetContainer = styled.div`
  width: ${(props) => (props.isSmallScreen ? '400px' : '1200px')};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const NewsComponent = React.memo(() => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    // Initial check
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      feedMode: 'all_symbols',
      isTransparent: false,
      displayMode: 'regular',
      width: isSmallScreen ? 400 : 1200,
      height: 600,
      colorTheme: 'dark',
      locale: 'en',
    });

    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    return () => {
      if (containerRef.current && containerRef.current.firstChild) {
        containerRef.current.removeChild(containerRef.current.firstChild);
      }
    };
  }, [isSmallScreen]);

  return (
    <NewsContainer>
      <WidgetContainer isSmallScreen={isSmallScreen}>
        <div ref={containerRef}></div>
      </WidgetContainer>
    </NewsContainer>
  );
});

export default NewsComponent;
