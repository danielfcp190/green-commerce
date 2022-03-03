import styled from "styled-components";

type Props = {
  shown: boolean;
  children: React.ReactNode;
}

export default function Modal({ shown, children }: Props) {
  return shown && (
    <Section>
      {children}
    </Section>
  );
}

const Section = styled.section`
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
`

