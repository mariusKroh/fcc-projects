import React, { useState, useEffect } from "react";
import {
  killLeadingZero,
  evaluateOperator,
  isNegativeValue,
  inputLength,
  hasInput,
} from "../utility/helpers";
import Display from "./Display";
import Button from "./Button";
import "./CalculatorStyles.css";

const Calculator = () => {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [operator, setOperator] = useState(null);
  const [inputValue, setInputValue] = useState(0);
  //
  const [calculatorState, setCalculatorState] = useState({
    inputFirstValue: true,
    inputSecondValue: false,
    inputOperator: false,
    hasPreviousResult: false,
  });
  //
  const {
    inputFirstValue,
    inputSecondValue,
    inputOperator,
    hasPreviousResult,
  } = calculatorState;
  //

  //
  useEffect(() => {
    if (inputFirstValue) {
      setCalculatorState((state) => {
        return { ...state, inputSecondValue: false, inputOperator: false };
      });
    } else if (inputSecondValue) {
      setCalculatorState((state) => {
        return { ...state, inputFirstValue: false, inputOperator: false };
      });
    } else if (inputOperator) {
      setCalculatorState((state) => {
        return { ...state, inputFirstValue: false, inputSecondValue: false };
      });
    }
  }, [inputFirstValue, inputSecondValue, inputOperator]);
  //
  useEffect(() => {
    if (inputSecondValue) {
      setFirstValue(inputValue);
    }
  }, [inputSecondValue, inputValue]);

  useEffect(() => {
    if (hasPreviousResult) {
      setOperator(inputValue);
    }
  }, [hasPreviousResult, inputValue]);

  const handleUserInput = (value) => {
    setInputValue(value);
    const isOperator = isNaN(value);
    if (isOperator) {
      return handleOperatorInput(value);
    } else {
      return handleNumberInput(value);
    }
  };

  const handleOperatorInput = (value) => {
    const isMinus = value === "-";
    const isDecimal = value === ".";
    if (inputFirstValue && isMinus && !hasInput(firstValue)) {
      return setFirstValue(value);
    } else if (
      (inputFirstValue &&
        isNegativeValue(firstValue) &&
        inputLength(firstValue) > 1) ||
      (inputFirstValue &&
        !isNegativeValue(firstValue) &&
        inputLength(firstValue) > 0)
    ) {
      setOperator(value);
      setCalculatorState({ inputOperator: true });
      return;
    } else if (inputOperator) {
      return setOperator(value);
    } else if (inputSecondValue) {
      // we have to switch values for calculation as the actual value of firstValue is stored under the secondValue variable
      calculate(
        secondValue,
        firstValue,
        evaluateOperator(operator),
        setSecondValue
      );
      handleReset();
      return;
    } else {
      return;
    }
    // }
  };

  const handleNumberInput = (value) => {
    if (inputFirstValue && !hasPreviousResult) {
      return setFirstValue((state) =>
        killLeadingZero(String(state) + String(value))
      );
    } else if (inputOperator && !hasPreviousResult) {
      setSecondValue(firstValue);
      setCalculatorState({ inputSecondValue: true });
      return;
    } else if (inputSecondValue) {
      console.log("here");
      return setFirstValue((state) =>
        killLeadingZero(String(state) + String(value))
      );
    } else if (inputOperator && hasPreviousResult) {
      return setCalculatorState({ inputSecondValue: true });
    } else if (inputFirstValue && hasPreviousResult) {
      setCalculatorState({ inputFirstValue: true, hasPreviousResult: false });
      setFirstValue(value);
      return;
    }
  };

  const handleReset = (style) => {
    const isHardReset = style === "init";
    const isEquals = style === "equals";
    if (isHardReset) {
      setFirstValue(0);
      setSecondValue(0);
      setOperator(null);
      setCalculatorState({
        inputFirstValue: true,
        hasPreviousResult: false,
      });
    } else if (isEquals) {
      setSecondValue(0);
      setOperator(null);
      setCalculatorState({
        inputFirstValue: true,
        hasPreviousResult: true,
      });
    } else {
      setCalculatorState({
        inputOperator: true,
        hasPreviousResult: true,
      });
    }
  };

  const handleEquals = () => {
    if (inputFirstValue) {
      console.log("first");

      calculate(secondValue, firstValue, evaluateOperator("+"), setFirstValue);
      handleReset("equals");
      return;
    } else if (inputOperator) {
      return;
    } else if (inputSecondValue) {
      console.log("here");
      calculate(
        secondValue,
        firstValue,
        evaluateOperator(operator),
        setFirstValue
      );
      handleReset("equals");
    }
  };

  const calculate = (a, b, operation, valueToSet) =>
    valueToSet(operation(a, b));

  const display = () => {
    if (inputFirstValue || inputSecondValue) {
      return firstValue;
    } else {
      return operator;
    }
  };

  return (
    <div id="grid-container">
      <div>First val: {firstValue}</div>
      <div>operator is: {operator}</div>
      <div>Second val: {secondValue}</div>
      <div>IN val: {inputValue}</div>
      <div> {inputFirstValue ? "true" : "false"}</div>
      <div> {inputOperator ? "true" : "false"}</div>
      <div> {inputSecondValue ? "true" : "false"}</div>
      <div> {hasPreviousResult ? "true" : "false"}</div>

      <div id="display">
        <Display content={display()} />
      </div>
      <div id="clear" onClick={() => handleReset("init")}>
        <Button content="AC" />
      </div>
      <div id="divide" onClick={() => handleUserInput("/")}>
        <Button content="/" />
      </div>
      <div id="multiply" onClick={() => handleUserInput("*")}>
        <Button content="*" />
      </div>
      <div id="subtract" onClick={() => handleUserInput("-")}>
        <Button content="-" />
      </div>
      <div id="add" onClick={() => handleUserInput("+")}>
        <Button content="+" />
      </div>
      <div id="equals" onClick={() => handleEquals()}>
        <Button content="=" />
      </div>
      <div id="decimal" onClick={() => handleUserInput(".")}>
        <Button content="." />
      </div>
      <div id="zero" onClick={() => handleUserInput(0)}>
        <Button content="0" />
      </div>
      <div id="one" onClick={() => handleUserInput(1)}>
        <Button content="1" />
      </div>
      <div id="two" onClick={() => handleUserInput(2)}>
        <Button content="2" />
      </div>
      <div id="three" onClick={() => handleUserInput(3)}>
        <Button content="3" />
      </div>
      <div id="four" onClick={() => handleUserInput(4)}>
        <Button content="4" />
      </div>
      <div id="five" onClick={() => handleUserInput(5)}>
        <Button content="5" />
      </div>
      <div id="six" onClick={() => handleUserInput(6)}>
        <Button content="6" />
      </div>
      <div id="seven" onClick={() => handleUserInput(7)}>
        <Button content="7" />
      </div>
      <div id="eight" onClick={() => handleUserInput(8)}>
        <Button content="8" />
      </div>
      <div id="nine" onClick={() => handleUserInput(9)}>
        <Button content="9" />
      </div>
    </div>
  );
};

export default Calculator;
