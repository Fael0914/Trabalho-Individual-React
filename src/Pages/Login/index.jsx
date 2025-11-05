import { ButtonComponent } from "../Components/Button";
import { InputGeneric } from "../Components/Input";
import styles from './style.module.css'

export function Login(){
    return(
        <div className={styles.login}> 
            <div className={styles.container}>
                    <form className={styles.form}>
                        <h1>Login</h1>
                        <div className={styles.box}>
                            <InputGeneric informacaoParaUsuario='Digite seu email' tipoDeInput='email'/>
                        </div>
                        
                        <div className={styles.box}>
                            <InputGeneric informacaoParaUsuario='Digite sua senha' tipoDeInput='password'/>
                        </div>
                        
                        <div className={styles.remember}>
                            <label>
                                <input type="checkbox"/>
                                lembrar de mim
                            </label>
                            <a href="#">Esqueci minha senha</a>
                        </div>
                        
                        <ButtonComponent nomeBotao='Login'/>
                        
                        <div className={styles.registerLinks}>
                            <p>Não tem conta? <a href="#">Cadastre-se</a></p>
                        </div>
                        
                    </form>
            </div>
        </div>
    )
}