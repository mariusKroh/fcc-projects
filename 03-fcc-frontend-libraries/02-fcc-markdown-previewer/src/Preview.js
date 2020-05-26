import React, { Component } from "react";

class Preview extends Component {
  render() {
    const { markdown } = this.props;
    return (
      <div id="preview" dangerouslySetInnerHTML={{ __html: markdown }}></div>
    );
  }
}

export default Preview;
