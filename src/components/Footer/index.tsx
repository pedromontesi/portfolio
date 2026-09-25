// import styles from '.style.module.scss';
import { Container } from "../Container";
import FallingText from './FallingText';
import { HiArrowSmUp } from "react-icons/hi";

type FooterProps = {
  item1: String;
  item2: String;
  item3: String;
  item4: String;
}

export function Footer ({ item1, item2, item3, item4 }: FooterProps) {
  return (
    <Container>
      <ul className="flex flex-col gap-2">
        <li><a href="#about">{item1}</a></li>
        <li><a href="#experience">{item2}</a></li>
        <li><a href="#projects">{item3}</a></li>
        <li><a href="https://wa.me/+5521967508895" target="_blank" rel="noopener noreferrer">
          {item4}
        </a></li>
      </ul>
      <div className="mt-8 text-rainbow-pastel">
        <HiArrowSmUp />
        <a href="#top">Voltar ao Topo</a>
      </div>
      <FallingText
        text={`Feito com <3 por mim :D`}
        highlightWords={["Feito", "Bits", "<3", ":D"]}
        trigger="scroll"
        backgroundColor="transparent"
        wireframes={false}
        gravity={0.01}
        fontSize="2rem"
        mouseConstraintStiffness={0.9}
      />
    </Container>
  );
}