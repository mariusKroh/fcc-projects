import { createUseStyles } from "react-jss";
import colors from "../../helpers/colors";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    cursor: "pointer",
    zIndex: "200",
  },
  pad: {
    height: "90%",
    margin: "1.5%",
    borderRadius: "5px",
  },
  padName: {
    height: "3%",
    fontSize: "0.7rem",
    paddingLeft: "5%",
  },
  letter: {
    fontSize: "1rem",
    padding: "5%",
  },
  playing: {
    transform: "translate(2px, 2px)",
    filter: "brightness(90%)",
    boxShadow: "inset 0px 0px 4px  #111",
  },
  // Model Theming
  model808: {
    "& $pad": {
      backgroundColor: colors.TR909.grey,
      boxShadow: `2px 2px 2px 0 #444`,
    },
    "& $padName": { color: colors.TR808.white },
    "& $letter": { color: colors.TR808.yellow },
  },
  model909: {
    "& $pad": {
      backgroundColor: colors.TR909.primary,
      boxShadow: `2px 2px 2px 0 #222`,
    },
    "& $padName": { color: colors.TR909.primary },
    "& $letter": { color: colors.TR909.secondary },
  },
});

export default useStyles;
