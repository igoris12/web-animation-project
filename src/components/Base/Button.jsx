import React from 'react';

const Button = ({ type = 'button', text, color }) => {
  return (
    <button className="button" type={type}>
      {text}
    </button>
  );
};

export default Button;
