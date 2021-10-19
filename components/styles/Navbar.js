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
    cursor: pointer;
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
        transition: all 0.2s ease;
        -webkit-filter: drop-shadow(1px 2px 4px rgba(108, 99, 255, 0.5));
        filter: drop-shadow(white 1px 0 8px);
      }
      &:active {
        transform: scale(0.95);
      }
    }
  }

  .menu-wrapper {
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;

    .sliding-menu {
      display: flex;
      justify-content: space-evenly;
      position: absolute;
      right: 44px;
      background-color: ${({ theme }) => theme.secondary};
      border: 3px solid ${({ theme }) => theme.primary};
      border-radius: 5px;
      padding: 5px 30px;

      a {
        font-size: 1.125rem;
        font-weight: bold;
        color: #ffffff;
        white-space: nowrap;
        padding: 0 10px;

        &:hover {
          text-shadow: white 1px 0 10px;
          transition: all 0.2s ease;
        }
      }
    }
  }

  .menu-icon {
    width: 100%;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;

    img {
      transition: 0.5s all ease;
    }
  }

  /* MEDIA QUERIES */

  @media all and (max-width: 830px) {
    .sliding-menu {
      flex-direction: column;
      height: 150px;
      top: 44px;
      right: 0 !important;
      align-items: center;
    }
  }

  @media all and (max-width: 660px) {
    .socials {
      opacity: 0;
      pointer-events: none;
    }
  }
`;
