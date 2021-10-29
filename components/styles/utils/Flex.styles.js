/**
 * Flex wrapper
 * @Props => direction => row/column etc...
 *           switch => switch direction on screens with +1200px
 *           align => center/flex-start etc...
 *           justify => center/space-between etc...
 *           width => px/%/vw - Only applies on screens with +1200px
 */

import styled from "styled-components";

const Flex = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: center;
  justify-content: center;

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: ${(props) => props.lgSwitch && props.lgSwitch};
    align-items: ${(props) => props.lgAlign || "center"};
    justify-content: ${(props) => props.lgJustify || "center"};
    width: ${(props) => props.lgWidth || "100%"};
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.xLg}) {
    flex-direction: ${(props) => props.switch && props.switch};
    align-items: ${(props) => props.align || "center"};
    justify-content: ${(props) => props.justify || "center"};
    width: ${(props) => props.width || "100%"};
  }
`;

export default Flex;
