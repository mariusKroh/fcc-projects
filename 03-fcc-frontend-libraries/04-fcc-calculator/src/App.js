import React from "react";
import { useFccTest, FccTests } from "@asteffey/react-fcc-test";
import Calculator from "./components/Calculator";

const App = () => {
  useFccTest({
    fccTest: FccTests.javascript_calculator,
  });
  return <Calculator />;
};

export default App;
