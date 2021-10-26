import styled from "styled-components";

export const StyledHome = styled.div`
  section {
    width: 100%;
  }

  .landing-page {
    display: flex;
    justify-content: space-between;
    height: 90vh;

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
        border-radius: 5px;
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
      width: 50%;
      margin-top: 0;
      margin-right: 0;
    }
  }

  .about-intro {
    margin-top: 10vh;
    .box {
      background: rgba(63, 61, 86, 0.3);
      padding: 15px 60px;

      .argument {
        color: #e12222;
      }
      .function {
        color: #dc78f5;
      }
      .yellow {
        color: #f4e87c;
      }
      .blue {
        color: #838ef2;
      }
    }

    .img-wrapper-pc {
      position: relative;
      width: 750px;
      height: 430px;
    }

    .about-wrapper {
      display: flex;
      padding-top: 100px;
      justify-content: space-between;
      position: relative;
      margin-right: 100px;
      margin: 0;

      .about-text {
        width: 70%;

        a {
          color: #ffffff;
          opacity: 50%;
          font-size: 1.5rem;
          font-weight: bold;
          position: absolute;
          bottom: 0;
          right: 0;

          &:hover {
            opacity: 100%;
            transition: 0.5s all ease;
          }
        }
      }
    }
  }

  .card {
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h3 {
      width: 50%;
    }

    p {
      width: 50%;
      line-height: 185%;
    }
  }

  /* MEDIA QUERIES */

  @media all and (max-width: ${({ theme }) => theme.breakpoints.xxLg}) {
    .landing-page {
      h1 {
        font-size: 4.5rem;
      }
    }

    h2 {
      font-size: 3rem;
    }
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.xLg}) {
    .my-work-intro {
      .card-container {
        flex-direction: column;
        align-items: center;
        .card {
          width: 100%;
          padding-top: 8em;
        }
      }

      margin-bottom: 150px;
    }

    h2 {
      font-size: 2rem;
    }
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    h2 {
      font-size: 1.5rem;
    }
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.md}) {
    .landing-page {
      flex-direction: column-reverse;

      .text-wrapper {
        width: 100%;
      }

      h1 {
        font-size: 3rem;
      }

      button {
        bottom: -50px !important;
      }

      .img-wrapper {
        width: 100%;
      }
    }

    .about-wrapper {
      flex-direction: column;
      align-items: center;
      padding-top: 0px !important;

      .img-wrapper-pc {
        width: 370px;
        height: 215;
        margin: 0 auto;
      }

      .about-text {
        width: 100% !important;
      }
    }

    .box {
      /* padding: 5px 5px !important; */
      display: none;
    }

    h2 {
      font-size: 0.9rem;
    }

    a {
      bottom: -50px !important;
      font-size: 1.2rem !important;
    }
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    h1 {
      font-size: 2rem;
    }
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    .landing-page {
      flex-direction: column-reverse;
      justify-content: flex-end;
      align-items: center;
      /* height: 100vh; */

      .text-wrapper {
        width: 100%;
        text-align: center;
      }

      /* h1 {
        font-size: 2rem;
      } */

      .img-wrapper {
        height: 40%;
        display: block;
      }

      button {
        position: relative !important;
        margin: 0 auto;
      }
    }
  }
`;
