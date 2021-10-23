import { ThemeProvider } from "styled-components";
import { themeLight } from "../components/styles/theme";
import { motion, AnimatePresence } from "framer-motion";
import GlobalStyles from "../components/styles/GlobalStyles";
import Layout from "../components/Layout";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <ThemeProvider theme={themeLight}>
        <GlobalStyles />
        <Layout>
          <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
              key={router.route}
              variants={variants}
              initial="hidden"
              animate="enter"
              exit="exit"
              transition={{ type: "linear" }}
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
