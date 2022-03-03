import React from "react";
import Image from "next/image";
import styled from "styled-components";
import useWindowSize from "@global-hooks/useWindowSize";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonsCarousel from "./buttonsCarousel";
import TextCarousel from "./textCarousel";
import adao from "@assets/costeladeadao.jpg";
import flower from "@assets/flower.jpg";
import gardengirl from "@assets/gardengirl.jpg";
import gardenstore from "@assets/gardenstore.jpg";
import suculenta from "@assets/suculenta.jpg";

export default function carouselHeader() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const { width } = useWindowSize();

  const displayButtons = () => {
    return width > 768 && <ButtonsCarousel />;
  };

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={7000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      // removeArrowOnDeviceType={["tablet", "mobile"]}
      // deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      <Slide>
        <Image src={adao} alt="" layout="responsive" />
        <TextCarousel />
        {displayButtons()}
      </Slide>
      <Slide>
        <Image src={gardenstore} alt="" layout="responsive" />
        <TextCarousel />
        {displayButtons()}
      </Slide>
      <Slide>
        <Image src={gardengirl} alt="" layout="responsive" />
        <TextCarousel />
        {displayButtons()}
      </Slide>
      <Slide>
        <Image src={suculenta} alt="" layout="responsive" />
        <TextCarousel />
        {displayButtons()}
      </Slide>
      <Slide>
        <Image src={flower} alt="" layout="responsive" />
        <TextCarousel />
        {displayButtons()}
      </Slide>
    </Carousel>
  );
}

const Slide = styled.div`
  width: 100vw;
  height: 70vh;
  position: relative;

  @media (max-width: 768px) {
    height: auto;
  }
`;
