import styled from "styled-components";
import { cores } from "../../components/CssVariables";


export const Container = styled.div`
    transition: .5s;
    background-color: ${props => props.modoClaro ? cores.backgroundClaro : cores.backgroundEscuro};
    border-radius: 20px;
    box-shadow: 10px 10px 30px ${props => !props.modoClaro ? cores.backgroundClaro : cores.backgroundEscuro};
    color: ${props => !props.modoClaro ? cores.backgroundClaro : cores.backgroundEscuro};
    padding: 20px 10px;
    form{
        display: flex;
        flex-direction: column;
    }

    .header{
        display: flex;
        justify-content: space-between;
        margin: 5px;
        align-items: center;
    }

    p, label, input{
        color: ${props => !props.modoClaro ? cores.colorClaro : cores.colorEscuro}
    }
    .userInput{
        margin: 7px;
    }

    button[type='submit']{
        background-color: ${props => !props.modoClaro ? cores.backgroundClaro : cores.backgroundEscuro};
        transition: 1s ;
        &:hover{
            background-color: ${props => !props.modoClaro ? cores.backgroundClaro : cores.backgroundEscuro};
            filter: brightness(1.75);
        }
    }
`