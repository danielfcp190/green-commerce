import { Box, Modal, useDisclosure } from "@chakra-ui/react";

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
} from "./styles";

import MenuDropdown from "./MenuDropdown/MenuDropdown";
import { Link as LinkUI } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
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
            <CartIcon />
            Cart
          </Links>
        </ContainerLinks>
      </WrapperLinks>

      <MenuHamburguer src={"/assets/hamburguer.svg"} onClick={onOpen} />
      <Modal onClose={onClose} isOpen={isOpen}>
        <WrapperModalContent>
          <CustomModalContent>
            <SectionModal>
              <CloseButton src={"/assets/closeButton.svg"} onClick={onClose} />

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
