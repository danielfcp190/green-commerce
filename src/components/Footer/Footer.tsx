import { useRouter } from "next/router";
import {
  Section,
  ContainerSocialMedia,
  WrapperSocial,
  LogoTwitter,
  LogoFacebook,
  LogoInstagram,
  LogoLinkedin,
  LogoGooglePlus,
  ContainerCopyright,
  DescriptionCopyright,
  DescriptionContact,
} from "./styles";

export default function Footer() {
  const router = useRouter();
  return (
    <Section>
      <ContainerSocialMedia>
        <WrapperSocial>
          <LogoTwitter />
          <LogoFacebook />
          <LogoInstagram />
          <LogoLinkedin />
          <LogoGooglePlus />
        </WrapperSocial>
      </ContainerSocialMedia>
      <ContainerCopyright>
        <DescriptionCopyright>
          &#169; Copyright - 2022 <br /> All the rights reserved to
          Green-Commerce
        </DescriptionCopyright>
      </ContainerCopyright>
      <DescriptionContact>
        255 Post St | Zip Code: 94016 <br /> Union Square | San Francisco | CA{" "}
        <br />
        <span>tel: +1 (858) 2493-6951</span>
      </DescriptionContact>
    </Section>
  );
}
