import React from "react";
import { useFccTest, FccTests } from "@asteffey/react-fcc-test";
import DrumMachine from "./components/drummachine/DrumMachine";
import { ModelProvider } from "./context/ModelContext";

const App = () => {
  useFccTest({
    fccTest: FccTests.drum_machine,
  });
  return (
    <ModelProvider>
      <div className="App">
        <DrumMachine />
      </div>
    </ModelProvider>
  );
};

export default App;
