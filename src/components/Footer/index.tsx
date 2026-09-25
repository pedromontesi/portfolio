// import styles from '.style.module.scss';
import { Container } from "../Container";
import FallingText from './FallingText';

type FooterProps = {
    item1: String;
    item2: String;
    item3: String;
}


export function Footer ({ item1, item2, item3 }: FooterProps) {
    return (
        <Container>
        <ul className="flex flex-col gap-2 ">
            <li>{item1}</li>
            <li>{item2}</li>
            <li>{item3}</li>
        </ul>
        <div className="mt-8 ">
            <a href="#top">Voltar ao Topo</a>
        </div>
        <FallingText
            text={`Feito com <3 por mim :D`}
            highlightWords={["Feito", "Bits", "<3", ":D"]}
            highlightClass="highlighted"
            trigger="scroll"
            backgroundColor="transparent"
            wireframes={false}
            gravity={0.56}
            fontSize="2rem"
            mouseConstraintStiffness={0.9}
            />
        </Container>
        
    );
}