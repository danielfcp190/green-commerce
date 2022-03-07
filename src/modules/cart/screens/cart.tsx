import React, { useContext, useState } from "react";
import { CartContext } from "@global-contexts/CartContext";
import Image from "next/image";
import styled from "styled-components";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);

  console.log(cart);

  return (
    <div>
      {cart.map((item) => (
        <CartItem key={item.key}>
          <ImageWrapper>
            <Image
              src={`/assets/images/${item.name.replace(/ /g, "")}.jpg`}
              alt={item.name}
              layout="fill"
            />
          </ImageWrapper>
          <TextWrapper>
            <Name>{item.name}</Name>
            <Description>{item.description}</Description>
          </TextWrapper>
          <QuantityWrapper>
            <p>Quantity: {item.quantity}</p>
          </QuantityWrapper>
          <PriceWrapper>
            <p>Price:&nbsp;</p>
            <p> US$ {item.price.toFixed(2)}</p>
          </PriceWrapper>
          <TotalWrapper>
            <p>Total:&nbsp;</p>
            <p>US$ {(item.price * item.quantity).toFixed(2)}</p>
          </TotalWrapper>
          <Delete
            onClick={() => setCart(cart.filter((e) => e.key !== item.key))}
          >
            X
          </Delete>
        </CartItem>
      ))}
      <TotalCart>
        The total for your Green-Cart is: &nbsp; US$ &nbsp;
        {cart.reduce((a, b) => a + b.price * b.quantity, 0).toFixed(2)}
      </TotalCart>
    </div>
  );
}

const CartItem = styled.li`
  width: 90%;
  height: auto;
  border: 2px solid #0c4648;
  background-color: #dfceb9;
  font-family: "Open Sans";
  color: #0c4648;
  list-style-type: none;
  margin: 1rem auto;
  padding: 1rem;
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: 1fr 3fr 1fr 1fr 1fr 0.5fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 3fr 0.2fr;
    padding: 0.5rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 3rem;
  height: 3rem;
  border: 2px solid #0c4648;
  @media (max-width: 768px) {
    grid-row: 1 / span 4;
  }
`;

const TextWrapper = styled.div`
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Name = styled.h1`
  font-size: 22px;
  font-weight: 700;
  line-height: 40px;
  text-transform: capitalize;
`;

const Description = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const QuantityWrapper = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const PriceWrapper = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  @media (max-width: 768px) {
    display: flex;
    margin: 0.2rem 0;
  }
`;

const TotalWrapper = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Delete = styled.button`
  @media (max-width: 768px) {
    grid-column: 3;
    grid-row: 1 / span 4;
  }
`;

const TotalCart = styled.h1`
  font-family: "Open Sans";
  color: #0c4648;
  font-size: 22px;
  font-weight: 700;
  line-height: 40px;
  text-align: end;
  margin-right: 5rem;
  @media (max-width: 768px) {
    font-size: 22px;
    line-height: 30px;
  }
`;
