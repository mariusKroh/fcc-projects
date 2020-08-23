import { add, subtract, multiply, divide } from "./operations";

export const killLeadingZero = (value) => {
  const isSingleZero = value === "0";
  const isDoubleZero = value === "00";
  if (isDoubleZero || isSingleZero) {
    return "0";
  } else {
    return value.replace(/^0+/, "");
  }
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

export const hasDecimal = (value) => {
  return value % 1 !== 0;
};
