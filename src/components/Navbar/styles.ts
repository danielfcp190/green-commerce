import { Box, Link, ModalContent } from "@chakra-ui/react";
import styled from "styled-components";

import { Cart } from "styled-icons/fluentui-system-filled";

export const Nav = styled.nav`
  background-color: ${(props) => props.theme.colors.straw};
  padding: 1.5rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Open Sans";
  font-weight: 900;
  color: ${(props) => props.theme.colors.green};
  width: 100%;
  @media (max-width: ${(props) => props.theme.queries.md}) {
    padding: 2rem 1rem;
  }
`;

export const LogoTitle = styled(Link)`
  font-size: 40px;
  font-weight: 1000;
  line-height: 40px;
`;

export const WrapperLinks = styled.div`
  @media (max-width: ${(props) => props.theme.queries.md}) {
    display: none;
    width: 100%;
    justify-content: space-between;
    position: relative;
  }
`;

export const ContainerLinks = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: baseline;
`;

export const Links = styled(Link)`
  width: 5rem;
  font-size: 1.3rem;
  line-height: 1.187rem;
  font-weight: 700;
  border-bottom: 2px solid transparent;
  margin-left: 1rem;
  text-decoration: none;

  :first-child {
    margin-left: 0;
  }
  :nth-child(3) {
    width: 6rem;
  }
  :nth-child(5) {
    width: 7rem;
  }
  :last-child {
    width: auto;
    display: flex;
    align-items: center;
  }
  :hover {
    border-bottom: 2px solid ${(props) => props.theme.colors.black};
    font-weight: 400;
    text-decoration: none !important;
  }
  :active {
    border-bottom: 2px solid ${(props) => props.theme.colors.black};
    font-weight: 400;
  }
`;

export const CartIcon = styled(Cart)`
  color: ${(props) => props.theme.colors.green};
  width: 30px;
`;

export const CartQuantity = styled.div`
  position: relative;
  z-index: 2;
  font-size: 1rem;
  text-align: center;
  padding-top: 0.2rem;
`;
export const CartCircle = styled.div`
  background: ${(props) => props.theme.colors.orange};
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  margin-top: -1.5rem;
  position: relative;
`;

export const MenuHamburguer = styled.img`
  width: 20px;
  height: 20px;
  @media (min-width: ${(props) => props.theme.queries.lg}) {
    display: none;
  }
`;

export const LinksModal = styled.a`
  color: ${(props) => props.theme.colors.white};
  font-size: 2.5rem;
  line-height: 2.5rem;
  font-family: "Open Sans";
  font-weight: 400;
  margin-top: 2.5rem;
  width: 100%;
  height: 52px;
  max-width: 180px;
  :first-child {
    margin-top: 0;
    display: flex;
    align-items: center;
    height: auto;
  }
`;

export const CloseButton = styled.img`
  width: 18px;
  width: 18px;
  position: absolute;
  right: 1.25rem;
  top: 3.5rem;
`;

export const SectionModal = styled.section`
  position: absolute;
  padding: 2rem 2rem;
  z-index: 99;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${(props) => props.theme.colors.green[700]};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: scroll;
  width: 100vw;
  justify-content: flex-start;
`;

export const WrapperModalContent = styled.div`
  .css-v9b9hc {
    display: flex;
    justify-content: flex-start;
  }
`;

export const CustomModalContent = styled(ModalContent)`
  width: 100vw;
  height: 100vh;
  margin: 0;
  max-height: auto;
  justify-content: flex-start;
  margin-top: 0 !important;
`;
