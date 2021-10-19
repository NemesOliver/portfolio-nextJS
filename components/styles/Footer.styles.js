import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .text-wrapper {
    display: flex;
    width: 80%;
    justify-content: space-between;
    align-items: center;

    h2 {
      width: 15%;
      white-space: pre-wrap;
    }

    p {
      width: 40%;
      line-height: 440%;
    }
  }

  svg {
    .icon {
      &:hover {
        -webkit-filter: drop-shadow(1px 2px 4px white);
        filter: drop-shadow(white 1px 0 8px);
      }
    }
  }

  .img-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }

  @media all and (max-width: 860px) {
    .text-wrapper {
      flex-direction: column;
      align-items: flex-start;

      h2 {
        width: 50%;
      }

      p {
        width: 80%;
        line-height: 180%;
      }
    }
  }
`;
