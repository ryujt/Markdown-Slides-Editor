export const convertToAbsolutePath = (path) => {
  try {
    const url = new URL(path, window.location.href);
    return url.href;
  } catch (error) {
    console.error("Invalid path:", path);
    return path;
  }
};
