import { useState, useEffect, useDebugValue } from 'react';

function useClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const clearId = setInterval(() => {
      const nextTime = new Date();
      setTime(nextTime);
    }, 1000);

    return () => {
      clearInterval(clearId);
    };
  }, []);

  useDebugValue(time, () => time.toLocaleTimeString());

  return time;
}

export default useClock;
