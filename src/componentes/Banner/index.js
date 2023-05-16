import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Olá, me chamo Gabriel Barbosa, e sou desenvolvedor Fullstack.
                    Seja bem vindo ao meu portifólio!
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />

                <img
                    className={styles.minhaFoto}
                    src='https://github.com/GabrielBarbosa2003.png'
                    alt="Foto do Antônio Evaldo sorrindo"
                />
            </div>
        </div>
    )
}