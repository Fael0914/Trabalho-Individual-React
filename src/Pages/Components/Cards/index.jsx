
import styles from './style.module.css'
import { ButtonComponent } from './../Button/index';
export const Card = ({conteudoDoCard, imagem}) => {
    
    var conteudoDoCard = conteudoDoCard
    var img = imagem

    return(

        <div className={styles.container}>
        <div>
            <img src={img} alt="" />
        </div>
        <div>
            <h1>{conteudoDoCard}</h1>
        </div>
        <div className={styles.button}>
            <ButtonComponent nomeBotao='Doar'/>
        </div>
    </div>
    )
}