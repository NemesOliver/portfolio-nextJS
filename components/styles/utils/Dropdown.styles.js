import styled from "styled-components";

export const StyledDropdown = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;

    h3,
    span {
      opacity: 100%;
      transition: 0.3s all ease;
    }
  }

  h3 {
    color: #ffffff;
    opacity: 50%;
    padding-right: 10px;
  }

  span {
    color: ${({ theme }) => theme.color};
    opacity: 50%;
  }
`;
