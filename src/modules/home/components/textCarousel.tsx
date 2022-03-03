import React from "react";
import styled from "styled-components";

export default function textCarousel() {
  return (
    <TextContainer>
      <Title>Garden Lovers_</Title>
      <Param>We are together on a happy and greener world!</Param>
    </TextContainer>
  );
}

const TextContainer = styled.div`
  position: absolute;
  top: 8vh;
  left: 10vw;
  width: 35vw;
  min-height: 30vh;
  background-color: rgb(202, 179, 138, 0.8);
  z-index: 3;
  font-family: "Open Sans";
  color: #2b3445;
  padding: 1rem;
  @media (max-width: 768px) {
    width: 70vw;
    left: 15vw;
  }
  @media (max-width: 425px) {
    width: 70vw;
    height: auto;
    top: 1vh;
  }
`;

const Title = styled.h1`
  position: relative;
  font-size: 60px;
  font-weight: 700;
  line-height: 70px;
  @media (max-width: 425px) {
    font-size: 45px;
    font-weight: 500;
    line-height: 50px;
  }
  @media (max-width: 320px) {
    font-size: 40px;
    font-weight: 500;
    line-height: 40px;
  }
`;

const Param = styled.p`
  position: relative;
  font-size: 40px;
  font-weight: 400;
  line-height: 50px;
  @media (max-width: 425px) {
    font-size: 30px;
    font-weight: 400;
    line-height: 30px;
    margin: 0.3rem 0;
  }
  @media (max-width: 425px) {
    font-size: 25px;
    font-weight: 400;
    line-height: 25px;
  }
`;
