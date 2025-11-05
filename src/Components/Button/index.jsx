import { useNavigate } from "react-router";
import { StyledButton } from "./style";
export const ButtonComponent = ({ nomeBotao, path, doacao }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <StyledButton onClick={handleClick}>
      {nomeBotao} 
    </StyledButton>
  );
};