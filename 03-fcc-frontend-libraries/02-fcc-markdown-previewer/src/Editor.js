import React, { Component } from "react";
import placeholder from "./placeholder";

import "./Editor.css";

class Editor extends Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(e) {
    this.props.parseMarkdown(e.target.value);
  }
  render() {
    const { input } = this.props;
    return (
      <textarea
        id="editor"
        value={input}
        onChange={this.handleInput}
      ></textarea>
    );
  }
}

export default Editor;
