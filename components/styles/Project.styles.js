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
      width: 50%;
      display: flex;
      flex-direction: column;

      h1 {
        text-decoration: underline 10px solid ${({ theme }) => theme.primary};
      }

      h3 {
        opacity: 50%;
        margin-top: -50px;
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
        display: flex;
        align-items: center;
        opacity: 50%;

        h3 {
          padding-right: 10px;
        }

        span {
          color: ${({ theme }) => theme.color};
        }

        &:hover {
          cursor: pointer;
          opacity: 100%;
          transition: 0.3s all ease;
        }
      }
    }
  }
`;
