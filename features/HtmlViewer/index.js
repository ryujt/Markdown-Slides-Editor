import { forwardRef, useEffect, useRef, useState } from "react";

const HtmlViewer = ({ html }, ref) => {
  const iframeRef = useRef(null);
  const [iframeHeight, setIframeHeight] = useState(null);

  useEffect(() => {
    if (!ref) return;
    ref.current = {
      iframe: iframeRef.current,
      print: () => {
        if (iframeRef.current) {
          iframeRef.current.contentWindow.print();
        }
      },
    };
  }, []);

  const setScrollHeight = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    const contentHeight = iframe.contentWindow.document.body.scrollHeight;
    setIframeHeight(contentHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", setScrollHeight);
    return () => {
      window.removeEventListener("resize", setScrollHeight);
    };
  }, []);

  return (
    <>
      {html && (
        <iframe
          scrolling="no"
          onLoad={setScrollHeight}
          ref={iframeRef}
          style={{ width: "100%", height: iframeHeight }}
          srcDoc={html}
        />
      )}
    </>
  );
};

export default forwardRef(HtmlViewer);
