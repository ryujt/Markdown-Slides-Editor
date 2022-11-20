const Slides = ({ content, style }) => {
  const html = `
  <!DOCTYPE html>
  <html><body>
    <style>
    body{
      margin:0px;
    }
    ${style}
    </style>
    ${content}
  </body></html>
  `;

  return <iframe style={{ width: "100%", height: "100%" }} srcDoc={html} />;
};

export default Slides;
