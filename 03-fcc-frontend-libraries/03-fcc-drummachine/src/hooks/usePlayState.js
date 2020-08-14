import { useState } from "react";

let initialPads = {
  Q: false,
  W: false,
  E: false,
  A: false,
  S: false,
  D: false,
  F: false,
  Z: false,
  X: false,
  C: false,
};

export default () => {
  const [padsPlaying, setPadsPlaying] = useState(initialPads);
  const resetPad = (id) => {
    setPadsPlaying((state) => {
      return { ...state, [id]: false };
    });
  };
  const setPlayState = (id) => {
    setPadsPlaying((state) => {
      const newState = { ...state, [id]: true };
      return newState;
    });
  };
  console.log(padsPlaying);
  return [padsPlaying, setPlayState, resetPad];
};
