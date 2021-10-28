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

    .box-wrapper {
      height: 50vh;
    }

    .box {
      h2 {
        font-size: 1.8rem;
        text-align: left;
      }

      background: rgba(63, 61, 86, 0.3);
      padding: 15px 60px;
      display: block;
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
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    .box {
      h2 {
        font-size: 2.5rem;
      }
    }
  }
`;
