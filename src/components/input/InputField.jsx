import React, { useState } from "react";
import "./inputField.css";
function InputField(props) {
  const [focused, setFocused] = useState(false);
  const { id, label, onChange, errorMessage, ...inputProps } = props;
  const focusedHandler = () => {
    console.log("enter");
    setFocused(true);
  };
  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={focusedHandler}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
}

export default InputField;
