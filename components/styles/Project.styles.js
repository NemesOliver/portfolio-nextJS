import styled from "styled-components";

export const StyledSection = styled.section`
  h1 {
    text-decoration: underline 10px solid ${({ theme }) => theme.primary};
  }
  /* width: 100%;
  height: 100vh;

  .content-wrapper {
    position: relative;
    height: 75%;
    display: flex;
    align-items: center;
    justify-content: space-between;
 

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

      
    }
  } */
`;
