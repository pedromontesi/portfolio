import styles from './Header.module.scss'
import { Button } from '../../atoms/buttom/buttom';
const Header = () => {
  return (
    <>
    <div className={styles.headerWrapper}>
        <Button>Baixar CV</Button>
        <div className={styles.separation}>
    </div>

    <div className={styles.socialMedia}>
        <a href="https://www.linkedin.com/in/pedromontesi" target="_blank" rel="noopener noreferrer"><img className={styles.socialMediaImg} src="/assets/linkedin.svg" alt="LinkedIn" /></a>
        <a href="https://github.com/pedromontesi" target="_blank" rel="noopener noreferrer"><img className={styles.socialMediaImg} src="/assets/github.svg" alt="GitHub" /></a>
        <a href="https://www.instagram.com/pemonsi.dev" target="_blank" rel="noopener noreferrer"><img className={styles.socialMediaImg} src="/assets/instagram.svg" alt="Instagram" /></a>
      </div>
    </div>
    
    <div>


<div className={styles.presentationWrapper}>
{/* <video autoPlay muted loop playsInline className="bgVideo">
    <source src="/assets/background.mp4" type="video/mp4" />
  </video> */}

    <h1 className={styles.title}>João<br/>Monteiro</h1>

    <h2 className={styles.about}>Sou desenvolvedor Full-stack, com forte ênfase em NodeJS e React no ecossistema web moderno. Tenho experiência na construção de aplicações completas, desde a modelagem de APIs e regras de negócio até interfaces performáticas e bem estruturadas, sempre buscando unir performance, design e experiência do usuário.</h2>
</div>
    </div>
    </>
  )
}

export default Header