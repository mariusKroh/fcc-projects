import React, { useContext } from "react";
// import { useEffect } from "react";
// import { PlayAudioContext } from "../../context/PlayAudioContext";
import useStyles from "./DrumPadStyles.js";

const DrumPad = ({ id, name, source, trigger }) => {
  //get styles
  const classes = useStyles();
  const { root } = classes;
  // context (later)
  //   const { isPlaying, togglePlaying } = useContext(PlayAudioContext);

  return (
    <div className={`drum-pad ${root}`} id={id}>
      {trigger}
      <audio className={`clip ${name}`} id={trigger} src={source} />
    </div>
  );
};

export default DrumPad;
