import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-evenly;
  margin-bottom: 300px;
  position: relative;

  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
  }
`;
