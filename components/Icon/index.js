import { Image } from "./styled";

const Icon = ({ src, ...props }) => {
  return <Image src={src} {...props} />;
};

const files = {
  download: `/static/icons/download.svg`,
  newTab: `/static/icons/newTab.svg`,
  add: `/static/icons/add.svg`,
  print: `/static/icons/print.svg`,
  github: `/static/icons/github.svg`,
};

const Icons = Object.keys(files).reduce((acc, key) => {
  acc[key] = (props) => <Icon src={files[key]} {...props} />;
  return acc;
}, {});

export default Icons;
