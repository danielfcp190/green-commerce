import React, { useState } from "react";
import styled from "styled-components";
import {
  Checkbox,
  Stack,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";

export default function asideFilter({
  onCategoriesChange,
  onEnvironmentChange,
  onPriceChange,
  prices,
}) {
  return (
    <AsideContainer>
      <Container>
        <CategoriesContainer>
          <Title>Categories</Title>
          <Categories>
            <li onClick={(e) => onCategoriesChange(e.target)}>All</li>
            <li onClick={(e) => onCategoriesChange(e.target)}>Seeds</li>
            <li onClick={(e) => onCategoriesChange(e.target)}>Plants</li>
            <li onClick={(e) => onCategoriesChange(e.target)}>Flowers</li>
            <li onClick={(e) => onCategoriesChange(e.target)}>Tools</li>
            <li onClick={(e) => onCategoriesChange(e.target)}>Fertilizers</li>
          </Categories>
        </CategoriesContainer>

        <EnvironmentContainer>
          <Title>Environment</Title>
          <StackStyled spacing={[2]} direction={["column"]}>
            <Checkbox
              size="md"
              colorScheme="orange"
              onChange={(e) => onEnvironmentChange(e.target.value)}
              value="outdoor"
            >
              <Option>Outdoor</Option>
            </Checkbox>
            <Checkbox
              size="md"
              colorScheme="orange"
              onChange={(e) => onEnvironmentChange(e.target.value)}
              value="indoor"
            >
              <Option>Indoor</Option>
            </Checkbox>
            <Checkbox
              size="md"
              colorScheme="orange"
              onChange={(e) => onEnvironmentChange(e.target.value)}
              value="lightless"
            >
              <Option>Lightless</Option>
            </Checkbox>
          </StackStyled>
        </EnvironmentContainer>

        <PriceContainer>
          <Title>Price</Title>
          <Prices>
            <Price>US$ {prices[0]}</Price>
            <Price>US$ {prices[1]}</Price>
          </Prices>
          <RangeSlider
            defaultValue={[0, 100]}
            min={0}
            max={100}
            step={1}
            // eslint-disable-next-line jsx-a11y/aria-proptypes
            aria-label={["min", "max"]}
            onChangeEnd={(e) => onPriceChange(e)}
          >
            <RangeSliderTrack bg="red.100">
              <RangeSliderFilledTrack bg="tomato" />
            </RangeSliderTrack>
            <RangeSliderThumb boxSize={6} index={0} />
            <RangeSliderThumb boxSize={6} index={1} />
          </RangeSlider>
        </PriceContainer>
      </Container>
    </AsideContainer>
  );
}

const AsideContainer = styled.div`
  width: 20%;
  height: 100vh;
  background-color: #3b6061;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 80%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 2rem;
`;

const CategoriesContainer = styled.div``;

const EnvironmentContainer = styled.div``;
const PriceContainer = styled.div``;

const Title = styled.h1`
  font-family: "Open Sans";
  font-weight: 700;
  font-size: 1.5rem;
  color: white;
`;

const Categories = styled.p`
  font-family: "Open Sans";
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  color: white;
  list-style-type: none;
  margin-left: 1rem;
  margin-top: 0.5rem;
  li {
    cursor: pointer;
  }
`;

const Option = styled.p`
  font-family: "Open Sans";
  font-weight: 500;
  font-size: 1rem;
  color: white;
`;

const StackStyled = styled(Stack)`
  margin-left: 1rem;
  margin-top: 0.5rem;
  line-height: 1.5rem;
`;

const Prices = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
  font-family: "Open Sans";
  font-weight: 500;
  font-size: 1rem;
  color: white;
`;

const Price = styled.p``;
