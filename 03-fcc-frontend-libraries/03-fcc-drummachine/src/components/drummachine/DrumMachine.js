import React, { useState, useContext } from "react";
import { useEffect } from "react";
import { ModelContext } from "../../context/ModelContext";
import useDisplayState from "../../hooks/useDisplayState";
import usePlayState from "../../hooks/usePlayState";
import { TR808, TR909 } from "../../Presets";
import Display from "../display/Display";
import DrumPad from "../drumpad/DrumPad";
import Switch from "../switch/Switch";
import useStyles from "./DrumMachineStyles.js";

const DrumMachine = () => {
  // get styles
  const classes = useStyles();
  const {
    root,
    machine,
    model808,
    model909,
    title,
    model,
    padsContainer,
  } = classes;

  // init the display state hook
  const [displayText, setDisplayText] = useState("");
  const { display, updateDisplay, playing } = useDisplayState("");

  // init the padsPlayState hook
  const [padsPlaying, setPlayState, resetPad] = usePlayState();

  // add listeners once onload
  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
    document.addEventListener("click", handleClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // get context and set preset
  const { is808, toggle808 } = useContext(ModelContext);
  let preset = is808 ? TR808 : TR909;

  // user presses a key
  const handleKeydown = (e) => {
    // check if key pressed should trigger a sample, if not return
    const keyPressed = e.keyCode;
    const sound = preset[0].sounds.filter((sound) => {
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
    const sound = preset[0].sounds.filter((sound) => {
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
    const name = preset[0].sounds.filter((sound) => {
      return sound.trigger === element.id;
    });
    const displayText = name[0].name;
    changeDisplay(displayText);
    //updateDisplay(displayText);
    // set the pads playstate using the elements id
    setPlayState(element.id);
    setTimeout(resetPad, 150, element.id);
  };

  const changeDisplay = (string) => {
    return setDisplayText(string);
  };

  const makePads = preset[0].sounds.map((sound, i) => (
    <DrumPad
      key={sound.id}
      id={sound.name}
      name={sound.name}
      source={sound.source}
      trigger={sound.trigger}
      isPlaying={padsPlaying[sound.trigger]}
    />
  ));

  return (
    <div className={`${root} ${is808 ? model808 : model909}`}>
      <div id="drum-machine" className={machine}>
        <div className={title}>
          <p>REACT</p>
          <Switch className="Switch Model" onChange={toggle808} />
        </div>
        <div className={model}>
          <p> {is808 ? "TR-808" : "TR-909"}</p>
          <p>SAMPLE PLAYER</p>
        </div>
        <Display text={displayText} isPlaying={playing} />
        <div className={padsContainer}>{makePads}</div>
      </div>
    </div>
  );
};

export default DrumMachine;
