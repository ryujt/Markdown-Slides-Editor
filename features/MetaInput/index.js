import Icon from "components/Icon";
import ImageURLInput from "components/ImageURLInput";
import Input from "components/Input";
import TextArea from "components/TextArea";
import { SHARE_META_KEY } from "constants/share";
import { encodeString } from "helpers/pako";
import { convertToAbsolutePath } from "helpers/path";
import { useEffect, useState } from "react";

import { ContentWrapper, IconWrapper, Modal, Wrapper } from "./styled";

const Component = {
  title: Input,
  ogTitle: Input,
  ogImage: ImageURLInput,
  ogDescription: (props) => <TextArea row={100} {...props} />,
};

const MetaInput = ({ children, url, onSubmit }) => {
  const [borderColor, setBorderColor] = useState("black");
  const [link, setLink] = useState("");
  const [meta, setMeta] = useState({
    title: "Documents",
    ogTitle: "My Slides",
    ogImage:
      "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    ogDescription: `Create by Markdown Slide Editor.`,
  });

  useEffect(() => {
    const base = convertToAbsolutePath(url);
    const encodedMeta = encodeString(JSON.stringify(meta));
    setLink(`${base}&&${SHARE_META_KEY}=${encodedMeta}`);
  }, [url, meta]);

  const onChangeFactory = (key) => {
    return (value) => {
      setMeta((prev) => ({ ...prev, [key]: value }));
    };
  };

  const onCopy = (link) => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        setBorderColor("green");
      })
      .catch(() => {
        setBorderColor("red");
      });
  };

  return (
    <Wrapper tabIndex={0} onClick={() => setBorderColor("black")}>
      {children}
      <Modal color={borderColor}>
        <IconWrapper>
          <Icon.link onClick={() => onCopy(link)} />
          <Icon.newTab onClick={() => onSubmit(link)} />
        </IconWrapper>

        <ContentWrapper>
          {Object.keys(meta).map((key, index) => {
            const Element = Component[key];
            return (
              <Element
                key={index}
                onChange={onChangeFactory(key)}
                defaultValue={meta[key]}
              />
            );
          })}
        </ContentWrapper>
      </Modal>
    </Wrapper>
  );
};

export default MetaInput;
