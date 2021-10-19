import styled from "styled-components";

export const StyledAbout = styled.div`
  .about-landing {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .welcome-text {
      width: 45%;
      display: flex;
      flex-direction: column;

      .img-wrapper {
        position: relative;
        width: 100%;
        height: 500px;
      }
    }

    .box {
      background: rgba(63, 61, 86, 0.3);
      padding: 40px 60px;
      width: 45%;
      height: 100%;

      p {
        line-height: 185%;
      }
    }
  }

  .h2-wrapper {
    width: 100%;
    text-align: center;
    padding-bottom: 150px;
  }

  .grid-items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    p {
      width: 70%;
      line-height: 185%;
    }

    .picture {
      width: 530px;
      height: 470px;
      border: 3px solid ${({ theme }) => theme.primary};
    }

    .text {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }

  .skills-basic {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 150px;

    .img-basic {
      position: relative;
      height: 50vh;
      width: 50%;
    }

    li {
      margin-bottom: 1em;
    }
  }

  .skills-advanced {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    margin: 300px 0;

    .img-advanced {
      position: relative;
      height: 50vh;
      width: 50%;
    }

    li {
      margin-bottom: 1em;
    }
  }

  .learn-next {
    width: 100%;
    text-align: center;

    h2 {
      margin-bottom: 150px;
    }

    .cards {
      display: flex;
      justify-content: space-evenly;
      margin-bottom: 300px;

      .card {
        width: 20%;
      }
    }
  }
`;
