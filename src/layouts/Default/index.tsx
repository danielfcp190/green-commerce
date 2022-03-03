import Footer from "@global-components/Footer/Footer";
import Navbar from "@global-components/Navbar/Navbar";
import React from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactElement;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  background-color: ${(props) => props.theme.colors.white};
`;

const Wrap = styled.div`
  flex: 1 1 0%;
`;

export default function Default({ children }: Props) {
  return (
    <Container>
      <Navbar />
      <Wrap>
        <div>{children}</div>
      </Wrap>
      <Footer />
    </Container>
  );
}
