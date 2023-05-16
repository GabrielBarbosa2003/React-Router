import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_eu.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Gabriel!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Antônio Evaldo sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Comecei com a programação em 2018, onde aprendi muito no ensino médio, e desde então venho praticando e estudando as mais novas bibliotecas e framework do mercado.
            </p>
            <p className={styles.paragrafo}>
                Possuo conhecimento em diversas linguagens, mas possuo grande expertisse em JavaScript, TypeScript, HTML, CSS e MySql
            </p>
            <p className={styles.paragrafo}>
                Contruo sites e interfaces dinamicas com a biblioteca mais crescente do mercado, React, e o back-end com Node.js, criando um script limpo e com as mais boas praticas da programaçao.
            </p>



        </PostModelo>
    )
}