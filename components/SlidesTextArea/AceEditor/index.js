import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import React from "react";
import AceEditor from "react-ace";

const MyAceEditor = ({ value, onChange }) => (
  <AceEditor
    style={{ width: "100%", height: "100%" }}
    mode="markdown"
    theme="github"
    value={value}
    onChange={onChange}
    editorProps={{ $blockScrolling: true }}
    setOptions={{
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      enableSnippets: true,
    }}
  />
);

export default MyAceEditor;
