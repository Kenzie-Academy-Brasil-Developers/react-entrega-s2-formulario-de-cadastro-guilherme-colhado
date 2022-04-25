import { Container } from "./style";
import SwitchButton from "../../components/Switch";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";

export default function BemVindo({ modoClaro, setModoClaro }){
    const param = useParams()
    console.log(param)
    return <Container modoClaro={modoClaro}>
        <header>
            <h1>Seja bem vindo: {param.nome}</h1>
            <SwitchButton setModoClaro={setModoClaro}/>
        </header>
        <main>
            <h2><Button>Seus dados</Button></h2>
        </main>
    </Container>
}