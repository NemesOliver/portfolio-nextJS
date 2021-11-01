import React from "react";
import Image from "next/image";
import styled from "styled-components";

const StyledCard = styled.div`
  width: 20%;
  h1,
  h3,
  p {
    text-align: center;
  }

  h3 {
    margin-bottom: 1.5rem;
  }

  @media all and (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
    margin-bottom: 8rem;
  }
`;

const Card = ({ title, description, image, mainText }) => {
  return (
    <StyledCard>
      {image ? (
        <Image src={image.src} alt={image.alt} width={250} height={180} />
      ) : (
        <h1>{mainText}</h1>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </StyledCard>
  );
};

export default Card;
