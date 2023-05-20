export const mobile = (text) => {
  return `
    @media only screen and (orientation: portrait) {
        ${text}
    }
    `;
};
