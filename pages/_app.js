import { ThemeProvider } from "styled-components";
import { themeLight } from "../components/styles/theme";
import GlobalStyles from "../components/styles/GlobalStyles";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={themeLight}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
