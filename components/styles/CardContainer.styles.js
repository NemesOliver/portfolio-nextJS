import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-evenly;
  margin-bottom: 300px;
  position: relative;

  .card {
    width: 20%;
  }

  a {
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
  }
`;
