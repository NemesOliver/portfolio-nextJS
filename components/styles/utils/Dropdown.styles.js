import styled from "styled-components";

export const StyledDropdown = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .dropdown-button {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    opacity: 0.5;
    &:hover {
      cursor: pointer;
      opacity: 100%;
      transition: 0.3s all ease;
    }
    h3 {
      padding-right: 10px;
    }
  }

  .options-wrapper {
    background-color: #030303;
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem 0.2rem 2rem;
    border-radius: 5px;
    border: 5px solid #ffffff;

    a {
      margin-bottom: 0.8rem;
      font-size: 1.2rem;
      font-weight: bold;
      text-decoration: none;
      opacity: 0.5;
      color: #ffffff;
      &:hover {
        cursor: pointer;
        opacity: 100%;
        text-decoration: underline 2px ${({ theme }) => theme.primary};
        transition: 0.3s all ease;
      }
    }
  }
`;
