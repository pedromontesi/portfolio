import { Container } from "../Container/index.tsx";
import Waves from './Waves';
import DecryptedText from './DecryptedText';
import HoldButton from './HoldButton';
import LogoLoop from './LogoLoop';
import MagicBento from './MagicBento';
import AnimatedList from './AnimatedList';

import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiWordpress,
  SiOpenjdk,
  SiSpring,
  SiPrisma,
  SiSymfony,
  SiDocker,
  SiMysql,
  SiLinux,
  SiSass,
  SiFigma,
  SiGulp,
} from 'react-icons/si';



const techLogos = [
  { node: <SiReact color="#fff" />, title: 'React' },
  { node: <SiTypescript color="var(--color-rainbow-1)" />, title: 'TypeScript' },
  { node: <SiNodedotjs color="#fff" />, title: 'Node.js' },
  { node: <SiPhp color="var(--color-rainbow-2)" />, title: 'PHP' },
  { node: <SiPython color="#fff" />, title: 'Python' },
  { node: <SiWordpress color="var(--color-rainbow-3)" />, title: 'WordPress' },
  { node: <SiOpenjdk color="#fff" />, title: 'Java' },
  { node: <SiSpring color="var(--color-rainbow-4)" />, title: 'Spring' },
  { node: <SiPrisma color="#fff" />, title: 'Prisma' },
  { node: <SiSymfony color="var(--color-rainbow-5)" />, title: 'Symfony' },
  { node: <SiDocker color="var(--color-rainbow-1)" />, title: 'Docker' },
  { node: <SiMysql color="var(--color-rainbow-2)" />, title: 'MySQL' },
  { node: <SiLinux color="#fff" />, title: 'Linux' },
  { node: <SiSass color="var(--color-rainbow-3)" />, title: 'Sass' },
  { node: <SiFigma color="var(--color-rainbow-6)" />, title: 'Figma' },
  { node: <SiGulp color="var(--color-rainbow-4)" />, title: 'Gulp' },
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
].map((card, index) => ({
  ...card,
  color: '#0a0a0a',
  glowColor: `var(--color-rainbow-${(index % 6) + 1}-rgb)`,
}));

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
  onHold={() => console.log('confirmed')}
>
  Segure para baixar meu currículo
</HoldButton>
</div>
      <Waves
        lineColor="#fff" /* var(--color-rainbow-1) — canvas não lê CSS vars, valor resolvido aqui */
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

    Sou <span className="text-rainbow-pastel font-bold">desenvolvedor fullstack</span>, estudo Análise e Desenvolvimento de Sistemas. Já trabalhei com e-commerces de <span className="text-rainbow-pastel font-bold">grandes marcas</span> e hoje foco em <span className="text-rainbow-pastel font-bold">React</span>, <span className="text-rainbow-pastel font-bold">TypeScript</span> e <span className="text-rainbow-pastel font-bold">Node.js</span>, com conhecimento também em <span className="text-rainbow-pastel font-bold">PHP</span> e <span className="text-rainbow-pastel font-bold">Python</span>.

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
  <h2 className="text-white text-4xl p-8 mt-16">
    Meus <span className="text-rainbow-pastel font-bold">projetos em destaque</span>
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
  glowColor="var(--color-rainbow-1-rgb)"
  disableAnimations={false}
/>
</div>

<div className="relative z-10 pb-16">
  <h2 className="text-white text-4xl p-8">
    Minha <span className="text-rainbow-pastel font-bold">experiência</span>
  </h2>

  <div className="px-8">
    <div className="mb-4">
      <h3 className="text-white text-2xl font-semibold">Desenvolvedor Full-Stack — Avanti (Penseavanti)</h3>
      <span className="text-neutral-400">2025 – 2026</span>
    </div>

    <AnimatedList
      accentColors={[
        'var(--color-rainbow-1)',
        'var(--color-rainbow-2)',
        'var(--color-rainbow-3)',
        'var(--color-rainbow-4)',
      ]}
      staggerDelay={0.12}
      showGradients={false}
      displayScrollbar={false}
      items={[
        'Desenvolvimento e homologação de páginas de e-commerce em VTEX FastStore (React, Next.js, SCSS e GraphQL) para múltiplas marcas simultaneamente (Skechers, Mottu e Santuário Nacional).',
        'Responsável por mais de 100 demandas (IDs) resolvidas de forma independente, cobrindo criação de componentes, ajustes de layout e correções de bugs em PLP, PDP e Checkout.',
        'Homologação de funcionalidades com TypeScript, SCSS e JavaScript (jQuery e moderno), garantindo qualidade e aderência aos requisitos antes da publicação em produção.',
        'Colaboração diária em fluxo de Git (revisão e abertura de pull requests, versionamento e merge) em equipe multi-projeto.',
      ]}
    />
  </div>
</div>
    </Container>
  );
}