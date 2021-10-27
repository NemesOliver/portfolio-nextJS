import styled from "styled-components";

export const StyledHome = styled.div`
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
