import Head from "next/head";
import "../styles/globals.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Oliver Nemes / Home</title>
        <meta
          name="keywords"
          content="Portfolio, Frontend Developer, React Developer"
        />
        <link rel="icon" href="/assets/menu_icon.png" />
        <style>
          @import url(
          {
            "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap"
          }
          );
        </style>
      </Head>
      <Layout>
        <main>
          <Component {...pageProps} />
        </main>
      </Layout>
    </>
  );
}

export default MyApp;
