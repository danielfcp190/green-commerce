import React from "react";
import Image from "@global-components/Image";
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
        <AddButton
          onClick={() =>
            props.setCart([
              ...props.cart,
              {
                ...props,
                quantity: props.quantity.current,
                key: Math.random(),
              },
            ])
          }
        >
          ADD TO CART
        </AddButton>

        <QuantityInput
          type="text"
          name="quantity"
          defaultValue="1"
          onChange={(e) => props.onQuantityChange(e.target.value)}
        />
      </AddAndQuantityWrapper>
      <span style={{ display: "none" }}>{props.environment}</span>
    </Product>
  );
}

const Product = styled.div`
  width: auto;
  height: auto;
  max-height: 35vh;
  padding: 1rem;
  margin: 0 1rem 1rem 0;
  border: 2px solid ${(props) => props.theme.colors.green};
  background-color: ${(props) => props.theme.colors.straw};
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-family: "Open Sans";
  color: ${(props) => props.theme.colors.green};
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 11.5vh;
  border: 2px solid ${(props) => props.theme.colors.green};
`;

const Name = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 40px;
  text-transform: capitalize;
`;

const Description = styled.p`
  font-size: 15px;
  font-weight: 500;
  line-height: 20px;
`;

const PriceAndStockWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
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
  font-size: 15px;
  font-weight: 700;
  line-height: 30px;
  border: 2px solid ${(props) => props.theme.colors.green};
  border-radius: 0.5rem;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.orange};
  padding: 0.2rem;
  &:active {
    transform: scale(0.9, 0.9);
  }
`;

const QuantityInput = styled.input`
  width: 20%;
  height: 100%;
  border: 2px solid ${(props) => props.theme.colors.green};
  border-radius: 0.5rem;
  text-align: center;
  margin-left: 0.1rem;
  font-size: 15px;
  font-weight: 500;
  line-height: 30px;
`;
