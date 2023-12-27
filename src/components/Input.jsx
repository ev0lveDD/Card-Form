import { useState } from "react";
import "./Input.css";

export default function Input({id, isInvalid, value, value2, inputLabel, type, maxLength, name, name2, placeholder, placeholder2,handleChange }) {

  const invalidStyle = {borderColor: "hsl(0, 100%, 66%)"};
  const validStyle = {borderColor: "hsl(270, 3%, 87%)"};

  return (
    <div id="inputColumn">
      <label>{inputLabel}</label>
      {name2 === "cardExpDateYY" ? 
      <div id="inputRow">
      <input style={isInvalid ? invalidStyle : validStyle } id={id} name={name} maxLength={maxLength} placeholder={placeholder} type={type} onChange={handleChange}></input>
      <input style={isInvalid ? invalidStyle : validStyle } id={id} name={name2} maxLength={maxLength} placeholder={placeholder2} type={type} onChange={handleChange}></input>
      </div>
      : <input style={isInvalid ? invalidStyle : validStyle } id={id} value={value} name={name} maxLength={maxLength} placeholder={placeholder} type={type} onChange={handleChange}></input>}
      {isInvalid ? <label className="labelError">Can't be blank</label> : null}
    </div>
  );
}
