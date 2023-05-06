import { useRef } from "react";

import { Header, PageWrapper, Window, WindowsWrapper } from "./styled";

const EditorLayout = ({ header, views }) => {
  const windows = useRef(views);

  const syncScroll = (e) => {
    const { scrollTop } = e.target;
    windows.current.forEach((element) => {
      element.scrollTop = scrollTop;
    });
  };

  return (
    <PageWrapper>
      <Header>{header}</Header>
      <WindowsWrapper>
        {views.map((view, index) => (
          <Window
            ref={(ref) => (windows.current[index] = ref)}
            key={index}
            onScroll={syncScroll}
          >
            {view}
          </Window>
        ))}
      </WindowsWrapper>
    </PageWrapper>
  );
};

export default EditorLayout;
