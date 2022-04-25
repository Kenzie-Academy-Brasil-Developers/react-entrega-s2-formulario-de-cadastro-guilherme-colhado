import { Container } from "./style";
import SwitchButton from "../../components/Switch";
import { useParams, Link } from "react-router-dom";


export default function BemVindo({ modoClaro, setModoClaro }){
    const param = useParams()
    return <Container modoClaro={modoClaro}>
        <header>
            <h1>Seja bem vindo: {param.nome}</h1>
            <SwitchButton setModoClaro={setModoClaro}/>
        </header>
        <main>
            <h2><Link to={'/'} color='#0101'>Voltar</Link></h2>
        </main>
    </Container>
}