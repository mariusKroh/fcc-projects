import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 100px)",
    gridTemplateRows: "repeat(6, 80px)",
    gap: "0.5rem",
    gridTemplateAreas:
      " 'display display display display''clear clear divide multiply''seven eight nine subtract''four five six add''one two three equals''zero zero decimal equals'",
    backgroundColor: "#d0d8e0",
    padding: "2rem 1rem",
    borderRadius: "5px",
    boxShadow: "5px 0px 5px 0 #7c4f6c",
    border: "5px solid #344149",
    fontFamily: "'Orbitron', sans-serif",
  },

  areaDisplay: {
    gridArea: "display",
  },
  areaClear: {
    gridArea: "clear",
  },
  areaDivide: {
    gridArea: "divide",
  },
  areaMultiply: {
    gridArea: "multiply",
  },
  areaSubtract: {
    gridArea: "subtract",
  },
  areadAdd: {
    gridArea: "add",
  },
  areaEquals: {
    gridArea: "equals",
  },
  areaDecimal: {
    gridArea: "decimal",
  },
  areaZero: {
    gridArea: "zero",
  },
  areaOne: {
    gridArea: "one",
  },
  areaTwo: {
    gridArea: "two",
  },
  areaThree: {
    gridArea: "three",
  },
  areaFour: {
    gridArea: "four",
  },
  areaFive: {
    gridArea: "five",
  },
  areaSix: {
    gridArea: "six",
  },
  areaSeven: {
    gridArea: "seven",
  },
  areaEight: {
    gridArea: "eight",
  },
  areaNine: {
    gridArea: "nine",
  },
});

export default styles;
