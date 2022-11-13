export const actionFactory = (type) => {
  return (data) => {
    return {
      type,
      data,
    };
  };
};
