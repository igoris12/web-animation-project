import React from 'react';

const Button = ({ type = 'button', text, color, width= '100%'}) => {
  return (
    <button
      style={{ color: color, borderColor: color, width: width }}
      className="button"
      type={type}
    >
      {text}
      <span className="after" style={{ background: color }}></span>
    </button>
  );
};

export default Button;
