import React, { useState } from "react";
import styled from "styled-components";
import Carousel from "../components/carousel";
import AsideFilter from "../components/asideFilter";
import ProductsList from "../components/productsList";

export default function Home() {
  const [categories, setCategories] = useState("all");
  const [environment, setEnvironment] = useState([]);
  const [prices, setPrices] = useState([0, 100]);

  const onEnvironmentChange = (target) => {
    environment.indexOf(target) !== -1
      ? setEnvironment(environment.filter((item) => item !== target))
      : setEnvironment([...environment, target]);
  };

  return (
    <>
      <Carousel />
      <Container>
        <AsideFilter
          onCategoriesChange={(e) => setCategories(e.innerHTML.toLowerCase())}
          onCategoriesChangeSelect={(e) => setCategories(e)}
          onEnvironmentChange={(e) => onEnvironmentChange(e)}
          onPriceChange={(e) => setPrices(e)}
          prices={prices}
        />
        <ProductsList
          categories={categories}
          environment={environment}
          prices={prices}
        />
      </Container>
    </>
  );
}

const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  height: auto;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
