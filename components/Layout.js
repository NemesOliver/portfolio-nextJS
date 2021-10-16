import Navbar from "./Navbar";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <Font>
      <Navbar />
      {children}
      {/* Footer */}
    </Font>
  );
};

export default Layout;

const Font = styled.div`
  font-family: Montserrat;
`;
