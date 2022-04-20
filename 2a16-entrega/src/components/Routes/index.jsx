import {Routes, Route} from 'react-router-dom'
import Form from '../../pages/Form'
import BemVindo from '../../pages/BemVindo'

export default function RoutesContainer({modoClaro, setModoClaro}) {
    
    return <Routes>
        <Route path='/' element={<Form  modoClaro={modoClaro} setModoClaro={setModoClaro}/>}/>
        <Route path='/bemVindo' element={<BemVindo modoClaro={modoClaro} setModoClaro={setModoClaro}/>} />
    </Routes>
}