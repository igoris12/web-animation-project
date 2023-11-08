import React, { useState } from "react";

function Textarea({
  name,
  id,
  cols = 30,
  rows = 10,
  width = "100%",
  placeholder,
}) {
  const [input, setInput] = useState("");
  return (
    <div
      className={input.length === 0 ? "textarea" : "textarea focus"}
      style={{ width: width }}
    >
      <textarea
        onChange={(e) => setInput(e.target.value)}
        placeholder={placeholder}
        name={name}
        id={id}
        cols={cols}
        rows={rows}
      ></textarea>
      <label>{placeholder}</label>
    </div>
  );
}

export default Textarea;
