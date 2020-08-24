import React from "react";
import styles from "./DisplayStyles";

const Display = ({ content }) => {
  const classes = styles();
  return <div className={classes.root}>{content}</div>;
};

export default Display;
