import React from "react";
import useStyles from "./DisplayStyles.js";

const Display = ({ text }) => {
  // get styles
  const classes = useStyles();
  const { root } = classes;
  return (
    <div id="display" className={root}>
      {text}
    </div>
  );
};

export default Display;
