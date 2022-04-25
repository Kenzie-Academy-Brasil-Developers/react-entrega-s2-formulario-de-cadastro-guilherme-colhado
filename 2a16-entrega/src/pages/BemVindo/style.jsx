import styled from "styled-components";
import { cores } from "../../components/CssVariables";

export const Container = styled.div`
    transition: .5s;
    background-color: ${props => props.modoClaro ? cores.backgroundClaro : cores.backgroundEscuro};
    border-radius: 20px;
    box-shadow: 10px 10px 30px ${props => !props.modoClaro ? cores.backgroundClaro : cores.backgroundEscuro};
    color: ${props => !props.modoClaro ? cores.backgroundClaro : cores.backgroundEscuro};
    padding: 20px 10px;
    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    a{
        color: ${props => !props.modoClaro ? cores.backgroundClaro : cores.backgroundEscuro};
        & :hover{
            filter: brightness(1.25);
        }
    }
`