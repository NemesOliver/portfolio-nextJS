import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100%;
  height: 100vh;

  .content-wrapper {
    position: relative;
    height: 75%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background: lightblue; */

    .info {
      width: 45%;
      display: flex;
      flex-direction: column;

      h1 {
        border-bottom: 5px solid ${({ theme }) => theme.primary};
      }

      li {
        padding-bottom: 0.5em;
      }
    }

    .description {
      width: 35%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      p {
        line-height: 185%;
      }

      .dropdown-wrapper {
        position: absolute;
        bottom: 0;
        right: 0;
      }
    }
  }
`;
