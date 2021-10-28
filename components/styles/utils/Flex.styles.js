import styled from "styled-components";

const Flex = styled.div`
  position: relative;
  /* height: 100%;
  width: 100%; */
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: center;
  justify-content: center;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.xLg}) {
    flex-direction: ${(props) => props.switch && props.switch};
  }
`;

export default Flex;
