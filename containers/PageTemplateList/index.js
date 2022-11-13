import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTemplates } from "../../redux/actions/pages";
import PageTemplateList from "../../components/PageTemplateList";

const PageTemplateListContainer = () => {
  const { templates } = useSelector((state) => state.pages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTemplates());
  }, []);

  const onClick = (content) => {
    console.log(content);
  };

  return <PageTemplateList templates={templates} onClick={onClick} />;
};

export default PageTemplateListContainer;
