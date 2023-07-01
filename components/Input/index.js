import React, { useState } from "react";

import { Field } from "./styled";

const Input = ({ onChange, defaultValue }) => {
  const [value, setValue] = useState(defaultValue);

  const handleBlur = () => {
    onChange(value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Field
      type="text"
      value={value}
      onBlur={handleBlur}
      onChange={handleChange}
    />
  );
};

export default Input;
