import styled from "styled-components";

export const StyledHome = styled.div`
  h1 {
    margin: 2rem 0;
  }

  h3 {
    margin: 2rem 0;
  }

  button {
    margin-top: 2.5rem;
  }

  .img-hackers-mind {
    position: relative;
    width: 100%;
    height: 300px;
  }

  .box {
    display: none;
  }

  .img-person-pc {
    position: relative;
    width: 300px;
    height: 300px;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    .img-hackers-mind {
      height: 400px;
    }
  }
`;
