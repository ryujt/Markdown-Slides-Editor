import React, { useState } from "react";

import { Field } from "./styled";

const TextArea = ({ onChange, defaultValue, ...props }) => {
  const [value, setValue] = useState(defaultValue);

  const handleBlur = () => {
    onChange(value);
  };

  const handleChange = (event) => {
    const textarea = event.target;
    const { scrollHeight, clientHeight, scrollTop } = textarea;
    if (scrollHeight - clientHeight <= scrollTop) {
      setValue(event.target.value);
    }
  };

  return (
    <Field
      {...props}
      style={{ resize: "none" }}
      value={value}
      onBlur={handleBlur}
      onChange={handleChange}
    />
  );
};

export default TextArea;
