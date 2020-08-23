import React, { useState, useEffect } from "react";
import {
  killLeadingZero,
  evaluateOperator,
  hasDecimal,
} from "../utility/helpers";
import Display from "./Display";
import Button from "./Button";
import "./CalculatorStyles.css";

const Calculator = () => {
  const [currentValue, setCurrentValue] = useState(null);
  const [memoryValue, setMemoryValue] = useState(0);
  const [display, setDisplay] = useState(0);
  const [operator, setOperator] = useState(null);

  useEffect(() => {
    if (currentValue !== null && operator === null) {
      setMemoryValue(currentValue);
    } else if (currentValue !== null && operator !== null) {
      setDisplay(currentValue);
    }
  }, [currentValue, operator]);

  useEffect(() => {
    setDisplay(memoryValue);
  }, [memoryValue]);

  const handleOperatorInput = (value) => {
    if (currentValue === display && operator !== null) {
      setOperator(value);
      handleEquals();
    } else {
      setDisplay(0);
      setCurrentValue(null);
      setOperator(value);
    }
  };

  const handleNumberInput = (value) => {
    if (operator === null) {
      saveToCurrentvalue(value);
    } else if (memoryValue === display && operator !== null) {
      setCurrentValue(value);
    } else {
      saveToCurrentvalue(value);
    }
  };

  const handleDecimalInput = () => {
    if (!hasDecimal(currentValue)) {
      saveToCurrentvalue(".");
    }
  };

  const handleMinusInput = () => {
    if (currentValue === null) {
      setCurrentValue("-");
    } else if (currentValue === "-" || operator !== "-") {
      handleOperatorInput("-");
    } else {
      return;
    }
  };

  const saveToCurrentvalue = (value) => {
    if (currentValue === null) {
      return setCurrentValue(killLeadingZero(String(value)));
    } else {
      return setCurrentValue((state) =>
        killLeadingZero(String(state) + String(value))
      );
    }
  };

  const handleReset = () => {
    setCurrentValue(null);
    setMemoryValue(0);
    setOperator(null);
    setDisplay(0);
    return;
  };

  const handleEquals = () => {
    if (currentValue === "-" || operator === null) {
      return;
    } else if (currentValue === null && display === 0) {
      setDisplay(memoryValue);
    } else {
      return calculate(
        memoryValue,
        currentValue,
        evaluateOperator(operator),
        setMemoryValue
      );
    }
  };

  const calculate = (a, b, operation, valueToSet) =>
    valueToSet(operation(a, b));

  return (
    <div id="grid-container">
      <div id="display">
        <Display content={display} />
      </div>
      <div id="clear" onClick={() => handleReset()}>
        <Button content="AC" />
      </div>
      <div id="divide" onClick={() => handleOperatorInput("/")}>
        <Button content="/" />
      </div>
      <div id="multiply" onClick={() => handleOperatorInput("*")}>
        <Button content="*" />
      </div>
      <div id="subtract" onClick={() => handleMinusInput()}>
        <Button content="-" />
      </div>
      <div id="add" onClick={() => handleOperatorInput("+")}>
        <Button content="+" />
      </div>
      <div id="equals" onClick={() => handleEquals()}>
        <Button content="=" />
      </div>
      <div id="decimal" onClick={() => handleDecimalInput(".")}>
        <Button content="." />
      </div>
      <div id="zero" onClick={() => handleNumberInput(0)}>
        <Button content="0" />
      </div>
      <div id="one" onClick={() => handleNumberInput(1)}>
        <Button content="1" />
      </div>
      <div id="two" onClick={() => handleNumberInput(2)}>
        <Button content="2" />
      </div>
      <div id="three" onClick={() => handleNumberInput(3)}>
        <Button content="3" />
      </div>
      <div id="four" onClick={() => handleNumberInput(4)}>
        <Button content="4" />
      </div>
      <div id="five" onClick={() => handleNumberInput(5)}>
        <Button content="5" />
      </div>
      <div id="six" onClick={() => handleNumberInput(6)}>
        <Button content="6" />
      </div>
      <div id="seven" onClick={() => handleNumberInput(7)}>
        <Button content="7" />
      </div>
      <div id="eight" onClick={() => handleNumberInput(8)}>
        <Button content="8" />
      </div>
      <div id="nine" onClick={() => handleNumberInput(9)}>
        <Button content="9" />
      </div>
    </div>
  );
};

export default Calculator;
