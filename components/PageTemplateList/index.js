const PageTemplateList = ({ templates, onClick }) => {
  const onClickFactory = (key) => {
    return () => onClick(templates[key]);
  };

  return Object.keys(templates)?.map((key, index) => (
    <button key={index} onClick={onClickFactory(key)}>
      {key}
    </button>
  ));
};

export default PageTemplateList;
