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
  left: 9vw;
  width: 35vw;
  height: 30vh;
  background-color: rgb(202, 179, 138, 0.8);
  z-index: 3;
  font-family: "Open Sans";
  color: #2b3445;
  padding-left: 1rem;
`;

const Title = styled.h1`
  position: relative;
  font-size: 60px;
  font-weight: 700;
  line-height: 70px;
`;

const Param = styled.p`
  position: relative;
  font-size: 40px;
  font-weight: 400;
  line-height: 50px;
`;
