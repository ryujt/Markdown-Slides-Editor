import { useDispatch, useSelector } from "react-redux";

import SlidesTextArea from "@/components/SlidesTextArea";
import { editPage } from "@/redux/actions/pages";

const SlidesTextAreaContainer = () => {
  const { pages } = useSelector((state) => state.pages);
  const dispatch = useDispatch();

  const onChangeFactory = (id) => {
    return (markdown) => {
      dispatch(editPage({ id, markdown }));
    };
  };

  return <SlidesTextArea pages={pages} onChangeFactory={onChangeFactory} />;
};

export default SlidesTextAreaContainer;
