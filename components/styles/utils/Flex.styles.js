import styled from "styled-components";

const Flex = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: center;
  justify-content: center;
`;

export default Flex;
