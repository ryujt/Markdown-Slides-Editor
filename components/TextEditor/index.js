import { useEffect, useRef, useState } from "react";

const TextEditor = (prop) => {
  const { value, onChange } = prop;

  const textAreaRef = useRef(null);
  const [text, setText] = useState(value);
  const [isDirty, setDirty] = useState(false);

  const handleChange = ({ target }) => {
    setText(target.value);
    setDirty(true);
  };

  const handleBlur = () => {
    if (isDirty) {
      onChange(text);
    }
    setDirty(false);
  };

  useEffect(() => {
    function typeTab(e) {
      if (e.key == "Tab") {
        const insertContent = `  `;
        e.preventDefault();
        var start = this.selectionStart;
        var end = this.selectionEnd;

        this.value =
          this.value.substring(0, start) +
          insertContent +
          this.value.substring(end);
        this.selectionStart = this.selectionEnd = start + insertContent.length;
      }
    }
    textAreaRef.current.addEventListener("keydown", typeTab);
  }, [textAreaRef]);

  return (
    <textarea
      {...prop}
      ref={textAreaRef}
      value={text}
      onBlur={handleBlur}
      onChange={handleChange}
    />
  );
};

export default TextEditor;
