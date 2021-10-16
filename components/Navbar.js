import Link from "next/link";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <h1 className="logo">
        &lt; Nemes <span>/</span>&gt;
      </h1>
      <ul>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </ul>
      <div>hamburger</div>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.div`
  background-color: #030303;

  .logo {
    color: #ffffff;
  }

  span {
    color: #6c63ff;
  }
`;
