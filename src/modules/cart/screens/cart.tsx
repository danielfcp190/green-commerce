import React, { useContext, useState } from "react";
import { CartContext } from "@global-contexts/CartContext";
import Image from "next/image";
import styled from "styled-components";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div>
      {cart.map((item) => (
        <CartItem key={item.id}>
          <ImageWrapper>
            <Image
              src={`/assets/images/${item.name.replace(/ /g, "")}.jpg`}
              alt={item.name}
              layout="fill"
            />
          </ImageWrapper>
          <Name>{item.name}</Name>
          <Description>{item.description}</Description>
          <Quantity>Quantity{item.quantity}</Quantity>
          <Price>US$ {item.price.toFixed(2)}</Price>
          <Total>US$ {(item.price * 2).toFixed(2)}</Total>
          <Delete onClick={() => setCart(cart.filter((e) => e.id !== item.id))}>
            X
          </Delete>
        </CartItem>
      ))}
    </div>
  );
}

const CartItem = styled.li`
  width: 90%;
  height: auto;
  border: 2px solid #0c4648;
  background-color: #dfceb9;
  list-style-type: none;
  margin: 1rem auto;
  padding: 1rem;
  display: grid;
  grid-template-columns: auto auto auto auto;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 3rem;
  height: 3rem;
  border: 2px solid #0c4648;
  grid-row: 1 / span 2;
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
`;

const Quantity = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
`;

const Price = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
`;

const Total = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
`;

const Delete = styled.button``;
