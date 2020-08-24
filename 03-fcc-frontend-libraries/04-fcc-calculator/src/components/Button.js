import React from "react";
import styles from "./ButtonStyles";

const Button = ({ content, color }) => {
  const classes = styles(color);
  const { calculatorButton } = classes;

  return (
    <div className={`calculator-button ${calculatorButton}`}>
      <div className="content">{content}</div>
    </div>
  );
};

export default Button;
