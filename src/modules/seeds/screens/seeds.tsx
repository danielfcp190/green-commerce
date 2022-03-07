import React, { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import Products from "@home/components/products";
import { CartContext } from "@global-contexts/CartContext";
import styled from "styled-components";

export default function Plants() {
  interface IProducts {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    environment: string;
    stock: number;
    quantity: number;
  }

  const defaultProducts: IProducts[] = [];

  const [productList, setProductList]: [
    IProducts[],
    (productList: IProducts[]) => void
  ] = useState(defaultProducts);

  useEffect(() => {
    axios
      .get<IProducts[]>("http://localhost:5000/productList/")
      .then((response) => setProductList(response.data));
    // .catch((error) => console.log(error));
  }, []);

  const { cart, setCart } = useContext(CartContext);

  const inputEl = useRef(null);

  const [input, setInput] = useState(1);

  useEffect(() => {
    inputEl.current = input;
  });

  return (
    <Container>
      {productList
        .filter((item) => item.category === "seeds")
        .map((item) => (
          <Products
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            stock={item.stock}
            quantity={inputEl}
            onQuantityChange={(e) => setInput(e)}
            environment={item.environment}
            cart={cart}
            setCart={setCart}
          />
        ))}
    </Container>
  );
}

const Container = styled.div`
  height: auto;
  padding: 1rem 0 0 1rem;
  background-color: ${(props) => props.theme.colors.white};
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  @media (max-width: ${(props) => props.theme.queries.lg}) {
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
  }
  @media (max-width: ${(props) => props.theme.queries.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: ${(props) => props.theme.queries.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${(props) => props.theme.queries.ssm}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
