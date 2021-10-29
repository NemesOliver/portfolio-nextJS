import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  height: 100vh;

  h2 {
    font-size: 4.5rem;
  }

  .footer-img {
    position: relative;
    height: 400px;
    width: 100%;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.xLg}) {
    .footer-img {
      height: 800px;
    }
  }
`;
