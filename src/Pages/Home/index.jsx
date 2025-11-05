import styles from './style.module.css'
import { Navbar } from '../../Components/Navbar';
import { Card } from '../../Components/Cards';
import cachorro1 from '../../assets/cachorro1.jpg'
import cachorro2 from '../../assets/cachorro2.jpg'
import cachorro3 from '../../assets/cachorro3.jpg'

export function Home(){
    return(
        <div >
            <div>
                <Navbar />
            </div>
            <div className={styles.main}>
                <Card conteudoDoCard="Doe 10 pontos para esse cachorrinho"  imagem={cachorro1}/>
                <Card conteudoDoCard="Doe 20 pontos para esse cachorrinho" imagem={cachorro2}/>
                <Card conteudoDoCard="Doe 50 pontos para esse cachorrinho" imagem={cachorro3}/>
            </div>
        </div>
    )
}