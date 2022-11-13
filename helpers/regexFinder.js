import _ from "underscore";

export const findContentInTag = (openTag, closeTag, html) => {
  const regex = `${openTag}(.|\n)*?${closeTag}`;
  const founds = [...html.matchAll(regex)]?.map((found) => {
    return {
      raw: found[0],
      mermaid: _.unescape(found[0]?.replace(openTag, "").replace(closeTag, "")),
    };
  });

  return founds;
};
