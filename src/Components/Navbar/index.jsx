 import styles from'./style.module.css'
 export const Navbar = () => {
     return(
        <div className={styles.body}>
            <nav>
                <a  className={styles.logo}>Loja</a>
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
