import React, { useState, useEffect } from "react";
import {
  killLeadingZero,
  evaluateOperator,
  hasDecimal,
} from "../utility/helpers";
import Display from "./Display";
import Button from "./Button";
import styles from "./CalculatorStyles";

const Calculator = () => {
  const classes = styles();
  const {
    root,
    areaDisplay,
    areaClear,
    areaDivide,
    areaMultiply,
    areaSubtract,
    areaAdd,
    areaEquals,
    areaDecimal,
    areaZero,
    areaOne,
    areaTwo,
    areaThree,
    areaFour,
    areaFive,
    areaSix,
    areaSeven,
    areaEight,
    areaNine,
  } = classes;

  const buttonColors = {
    pink: "#c62d80",
    blue: "#4fd9d7",
    darkGrey: "#344149",
    lightGrey: "#868e90",
  };

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

  useEffect(() => {
    const maxLength = 12;
    console.log(display.length);
    if (display.length >= maxLength) {
      setDisplay("MAX NUM");
    }
  }, [display.length]);

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
    <div className={root} id="grid-container">
      <div className={areaDisplay} id="display">
        <Display content={display} />
      </div>
      <div className={areaClear} id="clear" onClick={() => handleReset()}>
        <Button content="AC" color={buttonColors.pink} />
      </div>
      <div
        className={areaDivide}
        id="divide"
        onClick={() => handleOperatorInput("/")}
      >
        <Button content="/" color={buttonColors.darkGrey} />
      </div>
      <div
        className={areaMultiply}
        id="multiply"
        onClick={() => handleOperatorInput("*")}
      >
        <Button content="*" color={buttonColors.darkGrey} />
      </div>
      <div
        className={areaSubtract}
        id="subtract"
        onClick={() => handleMinusInput()}
      >
        <Button content="-" color={buttonColors.darkGrey} />
      </div>
      <div
        className={areaAdd}
        id="add"
        onClick={() => handleOperatorInput("+")}
      >
        <Button content="+" color={buttonColors.darkGrey} />
      </div>
      <div className={areaEquals} id="equals" onClick={() => handleEquals()}>
        <Button content="=" color={buttonColors.blue} />
      </div>
      <div
        className={areaDecimal}
        id="decimal"
        onClick={() => handleDecimalInput()}
      >
        <Button content="." color={buttonColors.darkGrey} />
      </div>
      <div className={areaZero} id="zero" onClick={() => handleNumberInput(0)}>
        <Button content="0" color={buttonColors.lightGrey} />
      </div>
      <div className={areaOne} id="one" onClick={() => handleNumberInput(1)}>
        <Button content="1" color={buttonColors.lightGrey} />
      </div>
      <div className={areaTwo} id="two" onClick={() => handleNumberInput(2)}>
        <Button content="2" color={buttonColors.lightGrey} />
      </div>
      <div
        className={areaThree}
        id="three"
        onClick={() => handleNumberInput(3)}
      >
        <Button content="3" color={buttonColors.lightGrey} />
      </div>
      <div className={areaFour} id="four" onClick={() => handleNumberInput(4)}>
        <Button content="4" color={buttonColors.lightGrey} />
      </div>
      <div className={areaFive} id="five" onClick={() => handleNumberInput(5)}>
        <Button content="5" color={buttonColors.lightGrey} />
      </div>
      <div className={areaSix} id="six" onClick={() => handleNumberInput(6)}>
        <Button content="6" color={buttonColors.lightGrey} />
      </div>
      <div
        className={areaSeven}
        id="seven"
        onClick={() => handleNumberInput(7)}
      >
        <Button content="7" color={buttonColors.lightGrey} />
      </div>
      <div
        className={areaEight}
        id="eight"
        onClick={() => handleNumberInput(8)}
      >
        <Button content="8" color={buttonColors.lightGrey} />
      </div>
      <div className={areaNine} id="nine" onClick={() => handleNumberInput(9)}>
        <Button content="9" color={buttonColors.lightGrey} />
      </div>
    </div>
  );
};

export default Calculator;
