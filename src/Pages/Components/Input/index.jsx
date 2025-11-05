import styles from './style.module.css'
export const InputGeneric = ({informacaoParaUsuario, tipoDeInput}) => {
    return (
        <div>
            <input  
                placeholder = {informacaoParaUsuario ? informacaoParaUsuario : "Digite algo..."}
                type={tipoDeInput}
                className={styles.inputEstilizado}
            />
        </div>
    )
}