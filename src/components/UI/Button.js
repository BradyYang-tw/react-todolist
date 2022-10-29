import React from "react";
import "./Button.css";

const Button = (props) => {
  console.log(props);
  return (
    <button
      className="button"
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
