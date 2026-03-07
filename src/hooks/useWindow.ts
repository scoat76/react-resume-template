import {useEffect, useState} from 'react';

interface WindowSize {
  width: number;
  height: number;
}

const useWindow = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  // Set size at the first client-side load
  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleSize);
    handleSize();
    return () => window.removeEventListener('resize', handleSize);
  }, []);

  return windowSize;
};

export default useWindow;
