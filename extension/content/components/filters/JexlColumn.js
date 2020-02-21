import autobind from "autobind-decorator";
import PropTypes from "prop-types";
import React from "react";
import { Controlled as CodeMirror } from "react-codemirror2";

// Mode and theme for Code Mirror
import "codemirror/addon/selection/active-line";
import "codemirror/mode/javascript/javascript";
import "codemirror/theme/neo.css";

@autobind
class JexlColumn extends React.PureComponent {
  static propTypes = {
    filterExpression: PropTypes.string.isRequired,
    onBeforeChange: PropTypes.func.isRequired,
    onCursorActivity: PropTypes.func,
  };

  focus() {
    if (this.editor) {
      this.editor.focus();
    }
  }

  handleEditorMounted(editor) {
    this.editor = editor;
  }

  handleBlur() {
    document
      .querySelectorAll(".filter-column .CodeMirror-cursors")
      .forEach(node => {
        node.style.visibility = "visible";
      });
  }

  render() {
    const { filterExpression, onBeforeChange, onCursorActivity } = this.props;
    return (
      <div className="filter-column">
        <header>
          <strong>JEXL Filter Expression</strong>
        </header>
        <CodeMirror
          editorDidMount={this.handleEditorMounted}
          onBlur={this.handleBlur}
          options={{
            mode: "javascript",
            theme: "neo",
            lineNumbers: false,
            styleActiveLine: true,
            gutters: [],
          }}
          value={filterExpression}
          style={{
            height: "auto",
          }}
          onBeforeChange={onBeforeChange}
          onCursorActivity={onCursorActivity}
        />
      </div>
    );
  }
}

export default JexlColumn;
