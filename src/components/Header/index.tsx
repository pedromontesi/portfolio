import { Container } from "../Container/index.tsx";
import { HoldButton } from '../react-bits';
import styles from './style.module.scss';

type HeaderProps = {
  item1: string;
  item2: string;
  item3: string;
  item4: string;
};

export function Header({ item1, item2, item3, item4 }: HeaderProps) {
  return (
    <Container>
      <div className={`${styles['nav-container']} flex flex-wrap items-center justify-between p-8`}>
        <ul className="flex flex-wrap gap-8">
          <li className="text-neutral-100"><a href="#about">{item1}</a></li>
          <li className="text-neutral-100"><a href="#experience">{item2}</a></li>
          <li className="text-neutral-100"><a href="#projects">{item3}</a></li>
          <li className="text-neutral-100">
            <a href="https://wa.me/+5521967508895" target="_blank" rel="noopener noreferrer">
              {item4}
            </a>
          </li>
        </ul>

        <HoldButton
          doneLabel=""
          backgroundColor="#27272a"
          fillColor="var(--gradient-rainbow-pastel)"
          textColor="#f5f5f5"
          fillTextColor="#ffffff"
          size="md"
          radius={14}
          fillDirection="right"
          holdTime={1000}
          releaseTime={210}
          pressScale={0.97}
          wave
          waveAmplitude={6}
          glow
          resetAfter={1200}
          onHold={() => {
            const link = document.createElement('a');
            link.href = '/curriculo.pdf';
            link.download = 'curriculo.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        >
          Segure para baixar meu currículo
        </HoldButton>
      </div>
    </Container>
  );
}
