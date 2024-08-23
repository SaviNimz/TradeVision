import React, { useEffect, useState } from 'react';

const NewsComponent = React.memo(() => {
  const [widgetWidth, setWidgetWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => {
      setWidgetWidth(window.innerWidth < 768 ? 400 : 1200); // Adjust 768px as needed for your breakpoint
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
      feedMode: "all_symbols",
      isTransparent: false,
      displayMode: "regular",
      width: widgetWidth,
      height: 500,
      colorTheme: "dark",
      locale: "en"
    });

    const container = document.querySelector('.tradingview-widget-container__widget');
    if (container) {
      container.appendChild(script);
    }

    return () => {
      if (container) {
        container.removeChild(script);
      }
    };
  }, [widgetWidth]); // Depend on widgetWidth

  return (
    <div>
      <div className="tradingview-widget-container__widget" style={{ width: widgetWidth }}></div>
    </div>
  );
});

export default NewsComponent;
