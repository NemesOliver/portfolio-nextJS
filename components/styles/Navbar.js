import styled from "styled-components";

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.backgroundColor};
  position: sticky;
  top: 0;
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
    white-space: nowrap;

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

  @media all and (max-width: 660px) {
    .socials {
      opacity: 0;
      pointer-events: none;
    }
  }
`;
