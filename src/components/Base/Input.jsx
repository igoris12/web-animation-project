import React from "react";

function Input({ name, type = "text", placeholder = "input", width = "100%" }) {
  return (
    <div className="input" style={{ width: width }}>
      <input type={type} placeholder={placeholder} name={name} />
      <label>{placeholder}</label>
    </div>
  );
}

export default Input;
