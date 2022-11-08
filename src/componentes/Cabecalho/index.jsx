import lupa from './lupa.png'
import logo from './logo.png'
import styles from './Cabecalho.module.scss'

function Cabecalho(){
    return(
        <header className={styles.cabecalho}>
            <img src={logo} alt="Logo do Alura Space" />
            <div className={styles.cabecalho__container}>
                <input className={styles.cabecalho__input} type="text" placeholder="O que você procura?" />
                <img className='cabecalho-lupa' src={lupa} alt="Ícone de pesquisa" />
            </div>
        </header>
    )
}

export default Cabecalho;
