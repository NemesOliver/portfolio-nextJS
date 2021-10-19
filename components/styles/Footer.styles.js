import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  height: 100vh;
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
