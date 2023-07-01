import Input from "components/Input";
import { useState } from "react";

import { Image, InputWrapper, Wrapper } from "./styled";

const ImageURLInput = ({ onChange, defaultValue }) => {
  const [url, setUrl] = useState(defaultValue);
  return (
    <Wrapper tabIndex={0}>
      <InputWrapper>
        <Input
          onChange={(value) => {
            setUrl(value);
            onChange(value);
          }}
          defaultValue={url}
        />
      </InputWrapper>
      <Image url={url} />
    </Wrapper>
  );
};

export default ImageURLInput;
