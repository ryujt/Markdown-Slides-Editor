export const invokeApi = async ({ url }) => {
  const option = {
    headers: {},
  };
  return fetch(url, option).then((response) => response.json());
};
