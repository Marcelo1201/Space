import home from './home.png';
import curtidas from './curtidas.png';
import vistas from './vistas.png';
import novo from './novo.png';
import surpreenda from './surpreenda.png';
import styles from './Menu.module.scss';

export default function Menu(){
    return(
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                <li className={styles.menu__item}>
                    <img src={home} alt="" />
                    <a href="">Início</a>
                </li> 
                <li className={styles.menu__item}>
                    <img src={curtidas} alt="" />
                    <a href="">Mais curtidas</a>
                </li> 
                <li className={styles.menu__item}>
                    <img src={vistas} alt="" />
                    <a href="">Mais vistas</a>
                </li> 
                <li className={styles.menu__item}>
                    <img src={novo} alt="" />
                    <a href="">Novas</a>
                </li> 
                <li className={styles.menu__item}>
                    <img src={surpreenda} alt="" />
                    <a href="">Surpreenda-me</a>
                </li>
            </ul>
        </nav>
    )
}
