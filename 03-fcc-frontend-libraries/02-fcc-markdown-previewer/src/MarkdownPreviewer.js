import React, { Component } from "react";
import marked from "marked";
import placeholder from "./placeholder";
import Editor from "./Editor";
import Preview from "./Preview";

class MarkdownPreviewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      markdown: "",
    };
    this.parseMarkdown = this.parseMarkdown.bind(this);
  }

  parseMarkdown(string) {
    this.setState({
      input: string,
      markdown: marked(string),
    });
  }

  componentDidMount() {
    this.parseMarkdown(placeholder);
  }

  render() {
    marked.setOptions({
      pedantic: false,
      gfm: true,
      breaks: true,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false,
    });

    const { input, markdown } = this.state;
    return (
      <div className="Markdown-Previewer">
        <Editor
          value={input}
          parseMarkdown={this.parseMarkdown}
          placeholder={placeholder}
        />
        <Preview markdown={markdown} />
      </div>
    );
  }
}

export default MarkdownPreviewer;
