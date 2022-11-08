import React from "react";
import linkedin from "./linkedin.png";
import github from "./github.png";
import styles from "./Rodape.module.scss";

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <div className={styles.rodape__icones}>
                <a
                    href="https://www.linkedin.com/in/marcelo-giacometti/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={linkedin} alt="ícone do Linkedin" />
                </a>
                <a
                    href="https://github.com/Marcelo1201"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={github} alt="ícone do Github" />
                </a>
            </div>
            <p>Desenvolvido por Marcelo Giacometti</p>
        </footer>
    );
}
