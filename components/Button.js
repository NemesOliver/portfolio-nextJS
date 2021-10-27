import styled from "styled-components";

const Button = ({ content }) => {
  return <StyledButton type="button">{content}</StyledButton>;
};

const StyledButton = styled.button`
  cursor: pointer;
  background-color: #6158f4;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: Montserrat;
  outline: none;
  border: none;
  padding: 10px 35px;
  border-radius: 5px;
  color: #ffffff;
  /* position: absolute; */
  bottom: 13vh;

  &:hover {
    -webkit-filter: drop-shadow(1px 2px 4px white);
    filter: drop-shadow(white 1px 0 8px);
    transform: scale(1.05);
    transition: 0.25s all ease;
  }
  &:active {
    transform: scale(1);
  }
`;

export default Button;
