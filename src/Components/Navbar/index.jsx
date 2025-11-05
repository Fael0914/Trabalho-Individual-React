 import { Link } from 'react-router'
import styles from'./style.module.css'
 export const Navbar = () => {
     return(
        <div className={styles.body}>
            <nav>
                <Link to="/" className={styles.logo}>Loja</Link>
                <div className={styles.mobileMenu}>
                    <div ></div>
                    <div ></div>
                    <div ></div>
                </div>
                <ul className={styles.navList}>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/">Sobre</a></li>
                    <li><a href="/">Projeto</a></li>
                    <li><a href="/">Contatos</a></li>
                </ul>
            </nav>
        </div>
    )
 }
