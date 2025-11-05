import styled from 'styled-components'

export const StyledButton = styled.button`
   width: 100%;
   height: 50px;
   margin-top: 10px;
   background-color: #fff;
   border: none;
   border-radius: 40px;
   font-size: 16px;
   color: #333;
   font-weight: 600;
   box-shadow: 0 0 10px rgba(0, 0, 0, .1);
    &:hover{
      background-color: transparent;
      border: 2px solid rgba(225, 225, 225, .2);
      color: white;
      transition: 0.5s;
    }
    &:active{
      background-color: #fff;
    }

`