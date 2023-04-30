import { Content, Item, Wrapper } from "./styled";

const PageTemplateList = ({ templates, onClick }) => {
  const onClickFactory = (key) => {
    return () => onClick(templates[key].raw);
  };

  return (
    <Wrapper>
      {Object.keys(templates)?.map((key, index) => (
        <Item key={index} onClick={onClickFactory(key)}>
          <Content scrolling="no" srcDoc={templates[key].html} />
        </Item>
      ))}
    </Wrapper>
  );
};

export default PageTemplateList;
