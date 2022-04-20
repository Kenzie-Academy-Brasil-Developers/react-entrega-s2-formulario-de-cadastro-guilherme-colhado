import { Container } from "./style";
import SwitchButton from "../../components/Switch";
import { useLocation } from "react-router-dom";

export default function BemVindo({ modoClaro, setModoClaro }){

    const {data} = useLocation().state

    return <Container modoClaro={modoClaro}>
        <header>
            <h1>Seja bem vindo: {data.userName}</h1>
            <SwitchButton setModoClaro={setModoClaro}/>
        </header>
        <main>
            <h2>Seus dados</h2>
            <h5>Seu email: {data.email}</h5>
            <h5>Sua Senha: {data.password}</h5>
        </main>
    </Container>
}