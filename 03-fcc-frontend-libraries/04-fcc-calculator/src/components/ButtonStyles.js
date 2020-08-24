import { createUseStyles } from "react-jss";

const styles = createUseStyles({
  calculatorButton: {
    height: "100%",
    width: "100%",
    fontSize: 24,
    display: "grid",
    placeItems: "center",
    cursor: "pointer",
    userSelect: "none",
    borderRadius: 5,
    backgroundColor: (color) => color,
    color: (color) => {
      return color === "#344149" ? "#868e90" : "#344149";
    },
  },
  operator: {
    backgroundColor: "#344149",
  },
  number: {},
});

export default styles;
