import React from "react";
import useStyles from "./SwitchStyles.js";

const Switch = ({ onChange }) => {
  // get styles
  const classes = useStyles();
  const { root, checkbox, slider } = classes;

  return (
    <label className={root}>
      <input type="checkbox" className={checkbox} onChange={onChange} />
      <div className={slider}></div>
    </label>
  );
};

export default Switch;
