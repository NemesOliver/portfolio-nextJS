import Navbar from "./Navbar";
import Footer from "./Footer";
import { Container } from "./styles/Container";

const Layout = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;
