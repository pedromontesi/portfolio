import styles from './Header.module.scss'
import { Button } from '../../atoms/buttom/buttom';
const Header = () => {
  return (
    <div className={styles.headerWrapper}>
        <Button>Baixar CV</Button>
    </div>
    
  )
}

export default Header