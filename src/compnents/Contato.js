import React from "react";
import styles from './Contato.module.css';
import foto from '../img/Os-produtos-mais-vendidos.png'
import Head from './Head'

const Contato = () => {
    return (
        <section className={styles.contato + " animeLeft"}>
            <Head title='Ranek | Contato' description='Entre em contato' />
            <img src={foto} alt="Contato"/>
            <div>
            <h1>Entre em contato</h1>
            <ul className={styles.dados}>
                <li>saulo.fgf21@hotmail.com</li>
                <li>+55 31 99999-9999</li>
                <li>Rua Ali Perto, 999</li>
            </ul>
            </div>
        </section>
    )
}

export default Contato
