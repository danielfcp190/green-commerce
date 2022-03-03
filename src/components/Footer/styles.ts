import styled from "styled-components";
import {
  Facebook,
  InstagramAlt,
  Linkedin,
  Twitter,
} from "styled-icons/boxicons-logos";
import { ScGooglePlus } from "styled-icons/evil";

export const Section = styled.section`
  /* display: flex; */
  /* padding: 4rem 1rem; */
  justify-content: space-between;
  align-items: center;
  font-family: "Open Sans";
  /* flex-direction: column; */
  background-color: #dfceb9;
  /* @media (min-width: ${(props) => props.theme.queries.lg}) {
    display: grid;
    padding: 1.687rem;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  } */

  @media (min-width: ${(props) => props.theme.queries.xl}) {
    display: flex;
    flex-direction: row;
    padding: 2.55rem 2rem;
    justify-content: space-between;
  }
`;

export const ContainerSocialMedia = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center; */

  @media (min-width: ${(props) => props.theme.queries.lg}) {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    align-items: flex-start;
  }
`;

export const WrapperSocial = styled.div`
  display: flex;
  align-items: baseline;
`;

export const LogoTwitter = styled(Twitter)`
  color: #0c4648;
  width: 30px;
`;
export const LogoFacebook = styled(Facebook)`
  color: #0c4648;
  width: 30px;
  margin-left: 1rem;
`;
export const LogoInstagram = styled(InstagramAlt)`
  color: #0c4648;
  width: 30px;
  margin-left: 1rem;
`;
export const LogoLinkedin = styled(Linkedin)`
  color: #0c4648;
  width: 30px;
  margin-left: 1rem;
`;
export const LogoGooglePlus = styled(ScGooglePlus)`
  color: #0c4648;
  width: 30px;
  margin-left: 1rem;
`;

export const ContainerCopyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-top: 3rem;
  color: #0c4648;

  @media (min-width: ${(props) => props.theme.queries.lg}) {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    justify-content: center;
    flex-direction: row;
    margin-top: 0;
  }
`;

export const DescriptionCopyright = styled.p`
  font-size: 0.75rem;
  line-height: 0.875rem;
  @media (min-width: ${(props) => props.theme.queries.lg}) {
    br {
      display: none;
    }
  }
`;

export const DescriptionContact = styled.p`
  width: 100%;
  max-width: 359px;
  font-size: 0.875rem;
  line-height: 1.125rem;
  text-align: center;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  justify-self: flex-end;
  margin-top: 2rem;
  color: #0c4648;

  @media (min-width: ${(props) => props.theme.queries.lg}) {
    padding: 2rem 0;
    text-align: end;
    margin-top: 0;
  }

  span {
    font-weight: 700;
  }
`;
