import React, { createContext } from "react";
import useToggleState from "../hooks/useToggleState";

export const PlayAudioContext = createContext();

export function PlayAudioProvider(props) {
  const [isPlaying, togglePlaying] = useToggleState(false);

  const playSound = (id) => {
    const sample = document.getElementById(id);
    console.log(sample);
    sample.currentTime = 0;
    sample.play();
  };

  return (
    <PlayAudioContext.Provider value={{ isPlaying, togglePlaying, playSound }}>
      {props.children}
    </PlayAudioContext.Provider>
  );
}
