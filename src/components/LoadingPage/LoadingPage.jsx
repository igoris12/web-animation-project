import React from "react";
import { useState } from "react";

const LoadingPage = ({ def = true }) => {
  const [loading, setLoading] = useState(true);
  const [animation, setAnimation] = useState(false);


  if (document.readyState === "complete") {
    if (animation === false) {
      setAnimation(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
      console.log("a");
    }
   }else {
     window.addEventListener("load", (event) => {
       if (animation === false) {
          setAnimation(true);
          setTimeout(() => {
            setLoading(false);
          }, 1000);
          console.log("c");
        }
      });
    }
  return (
    <div className={loading ? "loadingPage" : "loadingPage hidden"}>
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
