import { useContext } from "react";
import { Modal, useDisclosure } from "@chakra-ui/react";

import {
  Nav,
  LogoTitle,
  WrapperLinks,
  ContainerLinks,
  Links,
  CartIcon,
  MenuHamburguer,
  WrapperModalContent,
  SectionModal,
  CloseButton,
  LinksModal,
  CustomModalContent,
  CartQuantity,
  CartCircle,
} from "./styles";

import { CartContext } from "@global-contexts/CartContext";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cart, setCart } = useContext(CartContext);
  return (
    <Nav>
      <LogoTitle href="/">
        Green-
        <br />
        Commerce
      </LogoTitle>
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
            Cart
            <CartIcon />
            {cart.length !== 0 && (
              <CartCircle>
                <CartQuantity>{cart.length}</CartQuantity>
              </CartCircle>
            )}
          </Links>
        </ContainerLinks>
      </WrapperLinks>

      <MenuHamburguer src={"/assets/hamburguer.svg"} onClick={onOpen} />
      <Modal onClose={onClose} isOpen={isOpen}>
        <WrapperModalContent>
          <CustomModalContent>
            <SectionModal>
              <CloseButton src={"/assets/closeButton.svg"} onClick={onClose} />

              <Links href="/" passHref>
                <LinksModal>Home</LinksModal>
              </Links>
              <Links href="/cart" passHref>
                <LinksModal>Cart</LinksModal>
              </Links>
              <Links href="/seeds" passHref>
                <LinksModal>Seeds</LinksModal>
              </Links>
              <Links href="/plants" passHref>
                <LinksModal>Plants</LinksModal>
              </Links>
              <Links href="/flowers" passHref>
                <LinksModal>Flowers</LinksModal>
              </Links>
              <Links href="/tools" passHref>
                <LinksModal>Tools</LinksModal>
              </Links>
              <Links href="/fertilizers" passHref>
                <LinksModal>Fertilizers</LinksModal>
              </Links>
            </SectionModal>
          </CustomModalContent>
        </WrapperModalContent>
      </Modal>
    </Nav>
  );
}
