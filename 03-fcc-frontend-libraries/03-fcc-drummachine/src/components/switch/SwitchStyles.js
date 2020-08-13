import { createUseStyles } from "react-jss";
import colors from "../../helpers/colors";

const boxShadow = `inset 2px 2px 2px 0px ${colors.TR909.primary}`;

const useStyles = createUseStyles({
  root: {
    position: "relative",
    display: "inline-block",
    width: "2.8rem",
    height: "1.5rem",
    "& input": {
      opacity: "0",
      width: "0",
      height: "0",
      "&:checked": {
        "& ~ $slider": {
          backgroundColor: colors.TR909.grey,
          boxShadow: `inset 2px 2px 2px 0px ${colors.TR909.primary}`,

          "&:before": {
            transform: "translateX(1.4rem)",
            backgroundColor: colors.TR808.primary,
          },
        },
      },
    },
  },
  slider: {
    position: "absolute",
    cursor: "pointer",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: colors.TR909.primary,
    transition: "0.5s",
    borderRadius: "1rem",
    boxShadow: `inset 2px 2px 2px 0px #111`,

    "&:before": {
      position: "absolute",
      content: '""',
      height: "1.5rem",
      width: "1.5rem",
      borderRadius: "50%",
      backgroundColor: colors.TR909.secondary,
      transition: "0.5s",
    },
  },
});

export default useStyles;
