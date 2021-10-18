import styled from "styled-components";

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.backgroundColor};
  width: 100%;
  height: 10vh;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;

  .logo {
    color: ${({ theme }) => theme.color};
    font-size: 1.5rem;
    font-weight: bold;
    width: 100%;
    display: flex;

    span {
      color: ${({ theme }) => theme.primary};
    }
  }

  .socials {
    width: 100%;
    display: flex;
    justify-content: center;
    a {
      padding-left: 10px;
      &:hover {
        transform: scale(1.2);
        transition: 0.2s;
      }
      &:active {
        transform: scale(0.95);
      }
    }
  }

  .menu-icon {
    width: 100%;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
  }
`;
