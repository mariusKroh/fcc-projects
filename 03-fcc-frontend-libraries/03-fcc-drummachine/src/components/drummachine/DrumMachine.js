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
    element.currentTime = 0;
    element.play();
  };

  const updateDisplay = (string) => {};

  const makePads = PRESETS[0].sounds.map((sound) => (
    <DrumPad
      key={sound.id}
      id={sound.name}
      source={sound.source}
      trigger={sound.trigger}
      keyCode={sound.keyCode}
    />
  ));

  return (
    <div className={root} id="drum-machine">
      <Display />
      <div className={padsContainer}>{makePads}</div>
    </div>
  );
};

export default DrumMachine;
