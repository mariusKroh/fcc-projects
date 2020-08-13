import React from "react";
import useStyles from "./DisplayStyles.js";

const Display = ({ text }) => {
  // get styles
  const classes = useStyles();
  const { root, displayText } = classes;
  return (
    <div id="display" className={root}>
      <p className={displayText}>{text}</p>
    </div>
  );
};

export default Display;
