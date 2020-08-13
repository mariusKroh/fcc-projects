import React, { useContext } from "react";
import { ModelContext } from "../../context/ModelContext";

import useStyles from "./DisplayStyles.js";

const Display = ({ text, isPlaying }) => {
  // get styles
  const classes = useStyles();
  const { root, model808, model909, display, displayText, active } = classes;
  // get context
  const { is808, toggle808 } = useContext(ModelContext);
  return (
    <div id="display" className={`${root} ${is808 ? model808 : model909} `}>
      <div className={`${display} ${isPlaying ? active : null} `}>
        <p className={displayText}>{text}</p>
      </div>
    </div>
  );
};

export default Display;
