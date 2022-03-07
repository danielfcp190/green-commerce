import styled from "styled-components";
import {
  Facebook,
  InstagramAlt,
  Linkedin,
  Twitter,
} from "styled-icons/boxicons-logos";
import { ScGooglePlus } from "styled-icons/evil";

export const Section = styled.section`
  display: flex;
  padding: 4rem 3rem;
  justify-content: space-between;
  align-items: center;
  font-family: "Open Sans";
  background-color: #dfceb9;
  @media (max-width: ${(props) => props.theme.queries.xs}) {
    flex-direction: column;
    padding: 1rem 1rem;
  }
`;

export const ContainerSocialMedia = styled.div``;

export const WrapperSocial = styled.div`
  display: flex;
`;

export const LogoTwitter = styled(Twitter)`
  color: ${(props) => props.theme.colors.green};
  width: 30px;
`;
export const LogoFacebook = styled(Facebook)`
  color: ${(props) => props.theme.colors.green};
  width: 30px;
  margin-left: 1rem;
`;
export const LogoInstagram = styled(InstagramAlt)`
  color: ${(props) => props.theme.colors.green};
  width: 30px;
  margin-left: 1rem;
`;
export const LogoLinkedin = styled(Linkedin)`
  color: ${(props) => props.theme.colors.green};
  width: 30px;
  margin-left: 1rem;
`;
export const LogoGooglePlus = styled(ScGooglePlus)`
  color: ${(props) => props.theme.colors.green};
  width: 30px;
  margin-left: 1rem;
`;

export const ContainerCopyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${(props) => props.theme.colors.green};
  @media (max-width: ${(props) => props.theme.queries.md}) {
    margin: 1rem 0;
  }
`;

export const DescriptionCopyright = styled.p`
  font-size: 0.75rem;
  line-height: 0.875rem;
  br {
    display: none;
  }
  @media (max-width: ${(props) => props.theme.queries.md}) {
    br {
      display: block;
    }
  }
`;

export const DescriptionContact = styled.p`
  font-size: 0.875rem;
  line-height: 1.125rem;
  text-align: center;
  color: ${(props) => props.theme.colors.green};
  text-align: end;

  span {
    font-weight: 700;
  }

  @media (max-width: ${(props) => props.theme.queries.xs}) {
    text-align: center;
  }
`;
