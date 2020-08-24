import React from "react";
import { useFccTest, FccTests } from "@asteffey/react-fcc-test";
import Calculator from "./components/Calculator";
import styles from "./BaseStyles";

const App = () => {
  useFccTest({
    fccTest: FccTests.javascript_calculator,
  });

  const classes = styles();
  const { root } = classes;

  return (
    <div className={root}>
      <Calculator />
    </div>
  );
};

export default App;
