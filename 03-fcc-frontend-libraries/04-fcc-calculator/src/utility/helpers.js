import { add, subtract, multiply, divide } from "./operations";

export const killLeadingZero = (value) => {
  return value - 0;
};

export const evaluateOperator = (value) => {
  if (value === "+") {
    return add;
  } else if (value === "-") {
    return subtract;
  } else if (value === "*") {
    return multiply;
  } else {
    return divide;
  }
};

export const isNegativeValue = (value) => String(value).charAt(0) === "-";

export const inputLength = (value) => String(value).length;

export const hasInput = (value) => value !== 0 || inputLength(value) > 1;
