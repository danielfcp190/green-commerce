import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import Products from "../components/products";
import { CartContext } from "@global-contexts/CartContext";

export default function ProductsList({ categories, environment, prices }) {
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

  console.log(cart);

  const handlerAsideFilter = () => {
    if (categories === "all" && environment.length === 0) {
      return productList
        .filter((item) => item.price >= prices[0] && item.price <= prices[1])
        .map((item) => (
          <Products
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            stock={item.stock}
            quantity={item.quantity}
            onQuantityChange={(e) => {
              item.quantity = e.target.value;
              console.log(item);
            }}
            environment={item.environment}
            cart={cart}
            setCart={setCart}
          />
        ));
    } else if (categories === "all" && environment.length !== 0) {
      return productList
        .filter((item) => item.price >= prices[0] && item.price <= prices[1])
        .filter((item) => environment.indexOf(item.environment) !== -1)
        .map((item) => (
          <Products
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            stock={item.stock}
            environment={item.environment}
            cart={cart}
            setCart={setCart}
          />
        ));
    } else if (categories !== "all" && environment.length === 0) {
      return productList
        .filter((item) => item.price >= prices[0] && item.price <= prices[1])
        .filter((item) => item.category === categories)
        .map((item) => (
          <Products
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            stock={item.stock}
            environment={item.environment}
            cart={cart}
            setCart={setCart}
          />
        ));
    } else if (categories !== "all" && environment.length !== 0) {
      return productList
        .filter((item) => item.price >= prices[0] && item.price <= prices[1])
        .filter((item) => item.category === categories)
        .filter((item) => environment.indexOf(item.environment) !== -1)
        .map((item) => (
          <Products
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            stock={item.stock}
            environment={item.environment}
            cart={cart}
            setCart={setCart}
          />
        ));
    }
  };

  return (
    <Container>
      <>{handlerAsideFilter()}</>
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  height: 100%;
  background-color: white;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;
