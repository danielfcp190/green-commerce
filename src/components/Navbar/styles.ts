import { Box, Link } from "@chakra-ui/react";
import styled from "styled-components";

import { Cart } from "styled-icons/fluentui-system-filled";

export const Nav = styled.nav`
  background-color: #dfceb9;
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Open Sans";
  font-weight: 900;
  color: #0c4648;
  width: 100%;
  height: 12vh;

  @media (min-width: ${(props) => props.theme.queries.lg}) {
    padding: 2rem 4rem;
  }
`;

export const LogoTitle = styled(Link)`
  font-size: 40px;
  font-weight: 1000;
  line-height: 40px;
`;

export const WrapperLinks = styled.div`
  display: none;
  width: 100%;
  justify-content: space-between;
  position: relative;

  @media (min-width: ${(props) => props.theme.queries.lg}) {
    display: flex;
    flex-direction: column;
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
    text-decoration: none;
  }
  :nth-child(3) {
    width: 6rem;
  }
  :nth-child(5) {
    width: 7rem;
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
  color: #0c4648;
  width: 30px;
`;
