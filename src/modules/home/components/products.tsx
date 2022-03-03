import React from "react";
import Image from "next/image";
import styled from "styled-components";

export default function Products(props) {
  return (
    <Product key={props.id}>
      <ImageWrapper>
        <Image
          src={`/assets/images/${props.name.replace(/ /g, "")}.jpg`}
          alt={props.name}
          layout="fill"
        />
      </ImageWrapper>
      <Name>{props.name}</Name>
      <Description>{props.description}</Description>

      <PriceAndStockWrapper>
        <Price>US$ {props.price.toFixed(2)}</Price>
        <Stock>Stock: {props.stock}</Stock>
      </PriceAndStockWrapper>
      <AddAndQuantityWrapper>
        <AddButton onClick={() => props.setCart([...props.cart, props])}>
          ADD TO CART
        </AddButton>

        <QuantityInput
          type="text"
          name="quantity"
          defaultValue="1"
          onChange={(e) => props.onQuantityChange(e)}
        />
      </AddAndQuantityWrapper>
      <span style={{ display: "none" }}>{props.environment}</span>
    </Product>
  );
}

const Product = styled.div`
  width: 90%;
  height: 35vh;
  padding: 1rem;
  margin: 1rem;
  border: 2px solid #0c4648;
  background-color: #dfceb9;
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-family: "Open Sans";
  color: #0c4648;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 90%;
  height: 50%;
  border: 2px solid #0c4648;
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

const PriceAndStockWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
  margin: 0.5rem;
`;

const Price = styled.p``;

const Stock = styled.p``;

const AddAndQuantityWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const AddButton = styled.button`
  width: 80%;
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  border: 2px solid #0c4648;
  border-radius: 0.5rem;
  cursor: pointer;
  background-color: #d76144;
  padding: 0.2rem;
`;

const QuantityInput = styled.input`
  width: 20%;
  height: 100%;
  border: 2px solid #0c4648;
  border-radius: 0.5rem;
  text-align: center;
  margin-left: 0.1rem;
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
`;