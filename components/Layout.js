import Navbar from "./Navbar";
import styled from "styled-components";
import { Container } from "./styles/Container";

const Layout = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <main>{children}</main>
      {/* Footer */}
    </Container>
  );
};

export default Layout;
