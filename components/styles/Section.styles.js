import styled from "styled-components";

export const Section = styled.section`
  min-height: ${(props) => props.fullPage || 0};
  width: 100%;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.xLg}) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
