import styled from "styled-components";

export const StyledLink = styled.a`
  color: #ffffff;
  opacity: 50%;
  font-size: 1.5rem;
  font-weight: bold;
  position: absolute;
  bottom: -150px;
  right: 0;

  &:hover {
    opacity: 100%;
    transition: 0.5s all ease;
  }
`;
