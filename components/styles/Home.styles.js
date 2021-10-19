import styled from "styled-components";

export const StyledHome = styled.div`
  section {
    width: 100%;
    height: 90vh;
  }

  .landing-page {
    display: flex;
    justify-content: space-between;

    .text-wrapper {
      width: 45%;
      position: relative;

      h1 {
        white-space: pre-wrap;
      }

      p {
        line-height: 180%;
      }

      button {
        cursor: pointer;
        background-color: #6158f4;
        font-size: 1.5rem;
        font-weight: bold;
        font-family: Montserrat;
        outline: none;
        border: none;
        padding: 10px 35px;
        border-radius: 10px;
        color: #ffffff;
        position: absolute;
        bottom: 13vh;

        &:hover {
          -webkit-filter: drop-shadow(1px 2px 4px white);
          filter: drop-shadow(white 1px 0 8px);
          transform: scale(1.05);
          transition: 0.25s all ease;
        }
        &:active {
          transform: scale(1);
        }
      }
    }

    .img-wrapper {
      position: relative;
      height: 100%;
      width: 50vw;
      margin-top: 0;
      margin-right: -5vw;
    }
  }
`;
