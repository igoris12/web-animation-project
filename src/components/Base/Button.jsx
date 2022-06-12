import React from 'react';

const Button = ({ type = 'button', text, color }) => {
  return (
    <button
      style={{ color: color, borderColor: color }}
      className="button"
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
