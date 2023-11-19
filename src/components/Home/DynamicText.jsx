import React from 'react'
import { useTypewriter } from "react-simple-typewriter";

function DynamicText() {
    const { text } = useTypewriter({
        words: ["Freelancer", "Web Developer", "Frontend Developer"],
        loop: true,
        typeSpeed: 30,
        deleteSpeed: 30,
        delaySpeed: 3000,
      });
  return (
    <>
      {text}
    </>
  )
}

export default DynamicText
