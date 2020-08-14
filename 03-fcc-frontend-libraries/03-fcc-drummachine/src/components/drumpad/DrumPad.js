import React, { useContext } from "react";
import { ModelContext } from "../../context/ModelContext";
import useStyles from "./DrumPadStyles.js";

const DrumPad = ({ id, name, source, trigger, isPlaying }) => {
  //get styles
  const classes = useStyles();
  const { root, model808, model909, pad, padName, letter, playing } = classes;
  // get context
  const { is808 } = useContext(ModelContext);
  return (
    <div className={`${root} ${is808 ? model808 : model909}`}>
      <div className={`drum-pad ${pad} ${isPlaying ? playing : null}`} id={id}>
        <p className={letter}>{trigger}</p>
        <audio className={`clip ${name}`} id={trigger} src={source} />
      </div>
      <p className={padName}>{name}</p>
    </div>
  );
};

export default DrumPad;
