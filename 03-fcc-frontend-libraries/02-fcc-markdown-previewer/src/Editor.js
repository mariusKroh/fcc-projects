import React, { Component } from "react";
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
    const { input, placeholder } = this.props;
    return (
      <textarea id="editor" value={input} onChange={this.handleInput}>
        {placeholder}
      </textarea>
    );
  }
}

export default Editor;
