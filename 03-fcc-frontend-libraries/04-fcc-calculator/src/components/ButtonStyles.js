import { createUseStyles } from "react-jss";

const textShadow = " -1px -1px 1px #DDD, 1px 1px 1px #111";

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
    boxShadow: "2px 1px 1px 1px #344149",
    border: "1px solid #DDD",
    textShadow: textShadow,
  },
});

export default styles;
