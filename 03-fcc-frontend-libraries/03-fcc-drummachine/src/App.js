import React from "react";
import { useFccTest, FccTests } from "@asteffey/react-fcc-test";
import DrumMachine from "./components/drummachine/DrumMachine";
import { PlayAudioProvider } from "./context/PlayAudioContext";

const App = () => {
  useFccTest({
    fccTest: FccTests.drum_machine,
  });
  return (
    <PlayAudioProvider>
      <div className="App">
        <DrumMachine />
      </div>
    </PlayAudioProvider>
  );
};

export default App;
