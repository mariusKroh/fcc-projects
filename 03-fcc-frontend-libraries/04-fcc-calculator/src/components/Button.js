import React from "react";
import "./ButtonStyles.css";

const isOperator = (value) => {
  return isNaN(value) || value === "." || value === "=";
};

const Button = ({ content }) => {
  return (
    <div
      className={`calculator-button ${
        isOperator(content) ? "operator" : "number"
      }`}
    >
      <div className="content">{content}</div>
    </div>
  );
};

export default Button;
