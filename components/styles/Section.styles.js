import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  width: 100%;

  .underline {
    text-decoration: underline 10px solid ${({ theme }) => theme.primary};
  }

  .opacity-50 {
    opacity: 50%;
  }

  li {
    padding-bottom: 0.5em;
  }
`;
