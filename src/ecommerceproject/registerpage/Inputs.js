import React, { useState } from "react";
import "./registerpage.css";

export const Inputs = (props) => {
  const { label, id, errormessage, onChage, ...inputprops } = props;
  const [foucsed, setfocesd] = useState(false);
  const handlefocused = (e) => {
    setfocesd(true);
  };
  return (
    <div id="inputsbox">
      {/* <label>{label}</label> */}
      <input
        {...inputprops}
        onChange={onChage}
        className="inputs"
        onBlur={handlefocused}
        foucsed={foucsed.toString()}
      />
      <span className="span">{errormessage}</span>
    </div>
  );
};
