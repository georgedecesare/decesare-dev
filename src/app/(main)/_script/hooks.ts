import { useEffect, useState } from 'react';

const maxMobileWidth = 768; // Define the maximum width for mobile devices

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.screen.width <= maxMobileWidth);
    };

    handleResize(); // Set initial value

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

export { useIsMobile };
