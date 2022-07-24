import React, { useState, useEffect } from 'react';

function CountUp({ start, end, tiem }) {
  let [count, setCount] = useState(start);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count <= end) {
        setCount(count++);
      }
    }, tiem / end);

    return () => clearInterval(interval);
  }, []);

  return <>{count}</>;
}

export default CountUp;
