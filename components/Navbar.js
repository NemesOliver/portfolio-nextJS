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
  background-color: ${({ theme }) => theme.backgroundColor};

  .logo {
    color: ${({ theme }) => theme.color};
  }

  span {
    color: ${({ theme }) => theme.primary};
  }
`;
