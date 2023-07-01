import Viewer from "apps/viewer";
import Head from "next/head";

function Header({ title, ogTitle, ogImage, ogDescription }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={ogTitle} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:description" content={ogDescription} />
      </Head>
    </>
  );
}

export default function App(props) {
  return (
    <>
      <Header {...props} />
      <Viewer />
    </>
  );
}

export async function getServerSideProps({ query }) {
  const { title, ogTitle, ogImage, ogDescription } = query;

  return {
    props: {
      title: title || "Default Title",
      ogTitle: ogTitle || "Defailt Title",
      ogImage: ogImage || "https://example.com/default-image.jpg",
      ogDescription: ogDescription || "Default Description",
    },
  };
}
