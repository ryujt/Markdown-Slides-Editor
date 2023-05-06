import { forwardRef, useEffect, useRef } from "react";

const HtmlViewer = forwardRef(({ html }, ref) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    ref.current = {
      iframe: iframeRef.current,
      print: () => {
        if (iframeRef.current) {
          iframeRef.current.contentWindow.print();
        }
      },
    };
  }, []);

  return (
    <>
      {html && (
        <iframe
          ref={iframeRef}
          style={{ width: "100%", height: "100%" }}
          srcDoc={html}
        />
      )}
    </>
  );
});

export default HtmlViewer;
