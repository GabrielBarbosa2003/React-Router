import { Link, useLocation } from 'react-router-dom';
import styles from './MenuLink.module.css';

export default function MenuLink({ children, to }) { // children -> pega o valor dentro de uma tag pai, nesse caso a tag "MenuLink" e to recebe o "/" ou "/sobremim"
    const localizacao = useLocation();

    return (
        <Link className={`
            ${styles.link}
            ${localizacao.pathname === to ? styles.linkDestacado : ""}
        `} to={to}>
            {children}
        </Link>
    )
}