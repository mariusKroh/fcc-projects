import React from "react";
import { useFccTest, FccTests } from "@asteffey/react-fcc-test";
import DrumMachine from "./components/drummachine/DrumMachine";

const App = () => {
  useFccTest({
    fccTest: FccTests.drum_machine,
  });
  return (
    <div className="App">
      <DrumMachine />
    </div>
  );
};

export default App;
