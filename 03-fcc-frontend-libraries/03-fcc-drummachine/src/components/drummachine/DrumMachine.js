import React, { useState } from "react";
import { useEffect } from "react";
import Display from "../display/Display";
import DrumPad from "../drumpad/DrumPad";
import PRESETS from "../../Presets";
import useStyles from "./DrumMachineStyles.js";

const DrumMachine = (props) => {
  // get styles
  const classes = useStyles();
  const { root, padsContainer } = classes;
  // display state
  const [display, setDisplay] = useState("");
  // add listeners once onload
  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
    document.addEventListener("click", handleClick);
  }, []);
  // user presses a key
  const handleKeydown = (e) => {
    // check if key pressed should trigger a sample, if not return
    const keyPressed = e.keyCode;
    const sound = PRESETS[0].sounds.filter((sound) => {
      return sound.keyCode === keyPressed;
    });
    if (sound.length === 0) {
      return;
    }
    const sample = document.getElementById(sound[0].trigger);
    playSound(sample);
  };
  // user clicks
  const handleClick = (e) => {
    // check if user clicked a pad, if not return
    // ids and key names are all over the place because of fcc test case specifications
    // how can this be improved?
    const target = e.target;
    if (!target.classList.contains("drum-pad")) {
      return;
    }
    const sound = PRESETS[0].sounds.filter((sound) => {
      return sound.name === target.id;
    });
    const sample = document.getElementById(sound[0].trigger);
    playSound(sample);
  };

  const playSound = (element) => {
    // reset and play
    element.currentTime = 0;
    element.play();
    // get name and update display
    const name = PRESETS[0].sounds.filter((sound) => {
      return sound.trigger === element.id;
    });
    const displayText = name[0].name;
    updateDisplay(displayText);
  };

  const updateDisplay = (string) => {
    setDisplay(string);
  };

  const makePads = PRESETS[0].sounds.map((sound) => (
    <DrumPad
      key={sound.id}
      id={sound.name}
      source={sound.source}
      trigger={sound.trigger}
    />
  ));

  return (
    <div className={root} id="drum-machine">
      <Display text={display} />
      <div className={padsContainer}>{makePads}</div>
    </div>
  );
};

export default DrumMachine;
