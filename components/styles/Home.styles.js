import styled from "styled-components";

export const StyledHome = styled.div`
  section {
    width: 100%;
  }

  .hr {
    width: 70%;
    height: 3px;
    background: ${({ theme }) => theme.primary};
    margin: 150px auto;
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

  .card-container {
    display: flex;
    text-align: center;
    justify-content: space-evenly;
    padding-bottom: 150px;
    position: relative;

    a {
      color: #ffffff;
      opacity: 50%;
      font-size: 1.5rem;
      font-weight: bold;
      position: absolute;
      bottom: 0;
      right: 0;
      margin-right: 6vw;

      &:hover {
        opacity: 100%;
        transition: 0.5s all ease;
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
  }
`;
