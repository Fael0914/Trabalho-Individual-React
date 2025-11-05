import { StyledButton } from "./style";
export const ButtonComponent = ({nomeBotao}) => {
    var funcao = nomeBotao
    return(
        <StyledButton>
            {funcao}
        </StyledButton>
    );
}