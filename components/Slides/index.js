const Slides = ({ html }) => {
  return <iframe style={{ width: "100%", height: "100%" }} srcDoc={html} />;
};

export default Slides;
