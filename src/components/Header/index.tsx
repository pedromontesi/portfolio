import { Container } from "../Container/index.tsx";
import Waves from './Waves';
import DecryptedText from './DecryptedText';
import HoldButton from './HoldButton';
import LogoLoop from './LogoLoop';
import MagicBento from './MagicBento';
import { SiReact, SiTypescript, SiNodedotjs, SiPhp, SiPython, SiWordpress } from 'react-icons/si';

const techLogos = [
  { node: <SiReact color="#fff" />, title: 'React' },
  { node: <SiTypescript color="#2092c7" />, title: 'TypeScript' },
  { node: <SiNodedotjs color="#fff" />, title: 'Node.js' },
  { node: <SiPhp color="#2092c7" />, title: 'PHP' },
  { node: <SiPython color="#fff" />, title: 'Python' },
  { node: <SiWordpress color="#2092c7" />, title: 'WordPress' },
];

const projects = [
  {
    label: 'Projeto pessoal',
    title: 'Greenville',
    description: 'Site de imobiliária feito com React, TypeScript e SCSS Modules.',
  },
  {
    label: 'Projeto pessoal',
    title: 'Xadrez',
    description: 'Registro de jogadas e aberturas com React, TypeScript e Sass.',
  },
  {
    label: 'Destaque',
    title: 'Watch Party',
    description: 'App para assistir em grupo em tempo real, com React 19, TypeScript, Vite, Socket.IO e WebRTC.',
  },
  {
    label: 'GitHub',
    title: 'Mais projetos',
    description: 'Veja o restante no meu GitHub.',
    href: 'https://github.com/pedromontesi',
  },
].map((card) => ({ ...card, color: '#0a0a0a' }));

type HeaderProps = {
  logo: string;
  item1: string;
  item2: string;
  item3: string;
};


export function Header({ logo, item1, item2, item3 }: HeaderProps) {
  return (
    <Container>
      <img src={logo} alt="" />
      <div className="flex flex-wrap items-center justify-between p-8">
      <ul className="flex flex-wrap gap-8">
        <li className="text-neutral-100">{item1}</li>
        <li className="text-neutral-100">{item2}</li>
        <li className="text-neutral-100">{item3}</li>
      </ul>

<HoldButton
  doneLabel="baixado"
  backgroundColor="#27272a"
  fillColor="#2092c7"
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
  onHold={() => console.log('confirmed')}
>
  Segure para baixar meu currículo
</HoldButton>
</div>
      <Waves
        lineColor="#2092c7"
        backgroundColor="rgb(255, 255, 255, 0)"
        waveSpeedX={0.0125}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}  
        maxCursorMove={120}
        xGap={12}
        yGap={36}
/>


<div className="mt-16 flex justify-start items-center text-4xl p-8">
  <DecryptedText
    text="João Monteiro"
    animateOn="view"
    revealDirection="start"
    sequential
    speed={120}
    useOriginalCharsOnly={false}
    className="text-white"
    encryptedClassName="text-neutral-500"
  />
</div>

<div>
  <h2 className="text-white text-4xl p-8">

    Sou <span style={{ color: '#2092c7', fontWeight: 'bold' }}>desenvolvedor fullstack</span>, estudo Análise e Desenvolvimento de Sistemas. Já trabalhei com e-commerces de <span style={{ color: '#2092c7', fontWeight: 'bold' }}>grandes marcas</span> e hoje foco em <span style={{ color: '#2092c7', fontWeight: 'bold' }}>React</span>, <span style={{ color: '#2092c7', fontWeight: 'bold' }}>TypeScript</span> e <span style={{ color: '#2092c7', fontWeight: 'bold' }}>Node.js</span>, com conhecimento também em <span style={{ color: '#2092c7', fontWeight: 'bold' }}>PHP</span> e <span style={{ color: '#2092c7', fontWeight: 'bold' }}>Python</span>.

    Nas horas livres, crio projetos pessoais para aprender, como um app de watch party com WebRTC. Gosto de código limpo e de estar sempre estudando algo novo.

  </h2>
</div>

<div className="relative z-10 p-8">
  <LogoLoop
    logos={techLogos}
    speed={80}
    direction="left"
    logoHeight={48}
    gap={56}
    hoverSpeed={0}
    scaleOnHover
    fadeOut
    fadeOutColor="#000000"
    ariaLabel="Tecnologias que utilizo"
  />
</div>

<div className="relative z-10 pb-16">
  <h2 className="text-white text-4xl p-8">
    Meus <span style={{ color: '#2092c7', fontWeight: 'bold' }}>projetos em destaque</span>
  </h2>
  <MagicBento 
  textAutoHide={true}
  enableStars={false}
  enableSpotlight={false}
  enableBorderGlow={true}
  enableTilt
  cards={projects}
  enableMagnetism={false}
  clickEffect={false}
  spotlightRadius={400}
  particleCount={12}
  glowColor="32, 146, 199"
  disableAnimations={false}
/>
</div>




    </Container>
  );
}