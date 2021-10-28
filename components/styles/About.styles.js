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
    max-width: 500px;
    max-height: 450px;
    border: 3px solid ${({ theme }) => theme.primary};
  }

  /* 
    .box {
      background: rgba(63, 61, 86, 0.3);
      padding: 40px 60px;
      width: 45%;
      height: 100%;

      p {
        line-height: 185%;
      }
    }
   */

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
  } ;
`;
