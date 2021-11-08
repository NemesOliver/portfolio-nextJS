import styled from "styled-components";

export const StyledAbout = styled.div`
  h2 {
    margin-bottom: 2.5rem;
  }

  .img-about-thinker {
    position: relative;
    width: 100%;
    height: 200px;
    margin-bottom: 2.5rem;
  }

  .img-basic {
    position: relative;
    height: 200px;
    width: 100%;
    margin: 2.5rem 0;
  }

  .img-advanced {
    position: relative;
    height: 200px;
    width: 100%;
    margin: 2.5rem 0;
  }

  .picture {
    position: relative;
    width: 400px;
    height: 400px;
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid ${({ theme }) => theme.primary};
  }
  /* .picture-text {
    width: 33%;
  } */

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    .box {
      background: rgba(63, 61, 86, 0.3);
      padding: 40px 60px;
      width: 100%;
      height: 100%;
    }
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    .img-about-thinker {
      height: 400px;
    }

    .img-basic {
      height: 400px;
    }

    .img-advanced {
      height: 400px;
    }
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.xLg}) {
    ul {
      margin-left: 1rem;
    }

    .img-about-thinker {
      height: 400px;
    }

    .img-basic {
      height: 250px;
    }

    .img-advanced {
      height: 300px;
    }
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.xxLg}) {
    .img-about-thinker {
      height: 300px;
      width: 400px;
    }

    .img-basic {
      height: 300px;
    }

    .img-advanced {
      height: 500px;
    }
  } ;
`;
