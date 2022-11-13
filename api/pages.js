import { invokeApi } from "../helpers/apiHelper";

export const fetchTemplates = () => {
  const param = {
    url: `/api/templates`,
  };
  return invokeApi(param);
};
