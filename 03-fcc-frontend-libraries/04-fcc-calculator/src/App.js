import React from "react";
import { useFccTest, FccTests } from "@asteffey/react-fcc-test";
import Calculator from "./components/Calculator";

const App = () => {
  useFccTest({
    fccTest: FccTests.javascript_calculator,
  });
  return (
    <div
      className="App"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Calculator />
    </div>
  );
};

export default App;
