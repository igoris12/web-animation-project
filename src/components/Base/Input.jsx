import React from "react";

function Input({ name, type = "text", placeholder = "input", width = "100%" }) {
  return (
    <div className="input">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        style={{ width: width }}
      />
      <label>{placeholder}</label>
    </div>
  );
}

export default Input;
