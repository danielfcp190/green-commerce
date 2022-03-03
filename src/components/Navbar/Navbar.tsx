import {
  Nav,
  LogoTitle,
  WrapperLinks,
  ContainerLinks,
  Links,
  CartIcon,
} from "./styles";

import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <Nav>
      <LogoTitle href="/">Green-Commerce</LogoTitle>
      <WrapperLinks>
        <ContainerLinks>
          <Links href="/seeds" passHref>
            Seeds
          </Links>
          <Links href="/plants" passHref>
            Plants
          </Links>
          <Links href="/flowers" passHref>
            Flowers
          </Links>
          <Links href="/tools" passHref>
            Tools
          </Links>
          <Links href="/fertilizers" passHref>
            Fertilizers
          </Links>
          <Links href="/cart" passHref>
            <CartIcon />
            Cart
          </Links>
        </ContainerLinks>
      </WrapperLinks>
    </Nav>
  );
}
