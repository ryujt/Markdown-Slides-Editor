export const mobile = (text) => {
  return `
    @media (max-width: 1200px) {
        ${text}
    }
    `;
};
