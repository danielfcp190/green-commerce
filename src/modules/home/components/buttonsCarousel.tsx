import React from "react";
import Image from "next/image";
import styled from "styled-components";
import seed from "@assets/seed.svg";
import plant from "@assets/plant.svg";
import flowerIcon from "@assets/flower.svg";
import tool from "@assets/tool.svg";
import fertilizer from "@assets/fertilizer.svg";

import { Link } from "@chakra-ui/react";

export default function buttonsCarousel() {
  return (
    <ButtonsContainer>
      <Button href="/seeds" passHref>
        <IconWrapper>
          <Image src={seed} alt="" layout="fill" />
        </IconWrapper>
        <ButtonTitle>seeds</ButtonTitle>
      </Button>
      <Button href="/plants" passHref>
        <IconWrapper>
          <Image src={plant} alt="" layout="fill" />
        </IconWrapper>
        <ButtonTitle>plants</ButtonTitle>
      </Button>
      <Button href="/flowers" passHref>
        <IconWrapper>
          <Image src={flowerIcon} alt="" layout="fill" />
        </IconWrapper>
        <ButtonTitle>flowers</ButtonTitle>
      </Button>
      <Button href="/tools" passHref>
        <IconWrapper>
          <Image src={tool} alt="" layout="fill" />
        </IconWrapper>
        <ButtonTitle>tools</ButtonTitle>
      </Button>
      <Button href="/fertilizers" passHref>
        <IconWrapper>
          <Image src={fertilizer} alt="" layout="fill" />
        </IconWrapper>
        <ButtonTitle>fertilizers</ButtonTitle>
      </Button>
    </ButtonsContainer>
  );
}

const ButtonsContainer = styled.div`
  position: absolute;
  bottom: 5vh;
  right: 3vw;
  display: flex;
`;

const Button = styled(Link)`
  position: relative;
  width: 7vw;
  height: 12vh;
  background-color: ${(props) => props.theme.colors.straw};
  box-shadow: inset 0 0 5px black;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  &:active {
    transform: scale(0.9, 0.9);
  }
`;

const IconWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 60%;
`;

const ButtonTitle = styled.h1`
  font-family: "Open Sans";
  color: ${(props) => props.theme.colors.green};
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  margin: 0;
  box-sizing: border-box;
`;
