import React from "react";
import ReactFCCtest from "react-fcctest";
import MarkdownPreviewer from "./MarkdownPreviewer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ReactFCCtest />
      <MarkdownPreviewer />
    </div>
  );
}

export default App;
