import React from 'react';
import { useState } from 'react';

const LoadingPage = () => {
  const [loading, setLoading] = useState(true);
  const [animation, setAnimation] = useState(false);

  window.addEventListener('load', (event) => {
    setAnimation(!animation);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  return (
    <div className={loading ? 'loadingPage' : 'loadingPage hidden'}>
      <p style={animation ? { opacity: 0 } : { opacity: 1 }}>Igoris Ivanovas</p>
      <div
        style={animation ? { opacity: 0 } : { opacity: 1 }}
        className="loadingAnimation"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default LoadingPage;
