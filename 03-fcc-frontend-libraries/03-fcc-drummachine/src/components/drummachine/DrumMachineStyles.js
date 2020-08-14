import { createUseStyles } from "react-jss";
import colors from "../../helpers/colors";

const textShadow = "-1px -1px 1px #eee, 1px 1px 1px #111;";
const boxShadow = "7px 7px 5px 0px rgba(0,0,0,0.75)";

const useStyles = createUseStyles({
  root: {
    // i need to fix background with model theming
    backgroundColor: "#444444",
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Audiowide",
    userSelect: "none",
  },
  machine: {
    width: "1200px",
    height: "600px",
    borderRadius: "5px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "red",
    boxShadow: boxShadow,
  },
  baseDimensions: {
    width: "95%",
    padding: "0 2.5%",
    zIndex: "200",
  },
  title: {
    extend: "baseDimensions",
    height: "37.5%",
    paddingTop: "2.5%",
    fontSize: "1.5rem",
    display: "flex",
    flexDirection: "row",
    textShadow: textShadow,

    "& :last-child": {
      marginLeft: "auto",
    },
  },
  model: {
    extend: "baseDimensions",
    height: "30%",
    fontSize: "3rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    paddingBottom: "1%",
    textShadow: textShadow,

    "& :last-child": {
      marginLeft: "auto",
      fontSize: "1.5rem",
    },
  },
  padsContainer: {
    extend: "baseDimensions",
    height: "20%",
    display: "flex",
    flexDirection: "row",
  },
  // Model Theming
  model808: {
    "& $machine": { backgroundColor: colors.TR808.background },
    "& $title": { color: colors.TR808.primary },
    "& $model": { color: colors.TR808.secondary },
  },
  model909: {
    "& $machine": { backgroundColor: colors.TR909.background },
    "& $title": { color: colors.TR909.secondary },
    "& $model": { color: colors.TR909.primary },
  },
});

export default useStyles;
