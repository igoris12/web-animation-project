import React ,{useState} from "react";

function Input({ name, type = "text", placeholder = "input", width = "100%" }) {
  const [input , setInput] = useState('')

  return (
    <div className={ input.length === 0 ? "input" :"input focus"} style={{ width: width }}>
      <input onChange={(e)=> setInput(e.target.value)} type={type} placeholder={placeholder} name={name} />
      <label>{placeholder}</label>
    </div>
  );
}

export default Input;
