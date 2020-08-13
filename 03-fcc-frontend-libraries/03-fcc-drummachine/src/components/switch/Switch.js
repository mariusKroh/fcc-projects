import React, { useContext } from "react";
import { ModelContext } from "../../context/ModelContext";
import useStyles from "./SwitchStyles.js";

const Switch = ({ onChange }) => {
  // get styles
  const classes = useStyles();
  const { root, checkbox, slider } = classes;
  // get context
  const { is808 } = useContext(ModelContext);

  return (
    <label className={root}>
      <input type="checkbox" className={checkbox} onChange={onChange} />
      <div className={slider}></div>
    </label>
  );
};

export default Switch;
