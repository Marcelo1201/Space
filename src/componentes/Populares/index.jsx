import fotoPopulares from './fotos-populares.json';
import styles from './Populares.module.scss';

export default function Populares(){
    return(
        <aside className={styles.populares}>
            <h2>Populares</h2>
            <ul className={styles.populares__imagens}>
                {fotoPopulares.map((fotoPopular) => {
                    return(
                        <li key={fotoPopular.id}>
                            <img src={fotoPopular.path} alt={fotoPopular.alt} />
                        </li>
                    )
                })}
            </ul>
            <button>Ver mais fotos</button>
        </aside>
    )
}