import styled from "styled-components";

export const StyledLink = styled.a`
  color: #ffffff;
  opacity: 50%;
  font-size: 1.5rem;
  font-weight: bold;
  position: absolute;
  bottom: ${(props) => props.bottom || 0};
  right: 0;

  &:hover {
    opacity: 100%;
    transition: 0.5s all ease;
  }

  @media all and (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    bottom: -80px;
  }
`;
