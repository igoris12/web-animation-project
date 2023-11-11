import React, { useContext } from "react";
import OptionsContext from "../../reducers/OptionsContext";

const Button = ({ type = "button", text, color, width = "100%" }) => {
  const { optionsState } = useContext(OptionsContext);
  return (
    <button
      style={
        {
        color: optionsState.color,
        borderColor: optionsState.color,
        width: width,
      }}
      className="button"
      type={type}
    >
      {text}
      <span className="after" style={{ background: optionsState.color }}></span>
    </button>
  );
};

export default Button;
