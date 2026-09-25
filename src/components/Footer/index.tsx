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
            <li>{item1}</li>
            <li>{item2}</li>
            <li>{item3}</li>
            <li>{item4}</li>
            
                
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