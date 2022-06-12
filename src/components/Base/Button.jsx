import React from 'react';

const Button = ({ type = 'button', text, color }) => {
  return (
    <button
      style={{ color: color, borderColor: color }}
      className="button"
      type={type}
    >
      {text}
      <span className="after" style={{ background: color }}></span>
    </button>
  );
};

export default Button;
