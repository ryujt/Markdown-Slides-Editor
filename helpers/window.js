export const openHtmlWindow = (html) => {
  const newWindow = window.open();
  newWindow.document.write(html);
};
