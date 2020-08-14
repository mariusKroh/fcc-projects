import { createUseStyles } from "react-jss";
import colors from "../../helpers/colors";

const useStyles = createUseStyles({
  root: {
    fontFamily: "Audiowide",
    userSelect: "none",
  },
  display: {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "100",
    opacity: "0",
    transition: "opacity 0.15s ease-in-out",
  },
  displayText: {
    fontSize: "5rem",
    letterSpacing: "-0.05rem",
  },
  active: {
    opacity: "1",
  },
  // Model Theming
  model808: {
    "& $display": { backgroundColor: colors.TR808.primary },
    "& $displayText": { color: colors.TR808.yellow },
  },
  model909: {
    "& $display": { backgroundColor: colors.TR909.secondary },
    "& $displayText": { color: colors.TR909.background },
  },
});

export default useStyles;
