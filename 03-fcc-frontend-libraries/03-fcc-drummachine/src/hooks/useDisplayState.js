import { useState } from "react";

export default () => {
  const [display, setDisplay] = useState("");
  const [playing, setPlaying] = useState(false);
  return {
    display,
    updateDisplay: (string) => {
      setDisplay(string);
      setPlaying(true);
      setTimeout(() => {
        setPlaying(false);
      }, 150);
    },
    playing,
  };
};
