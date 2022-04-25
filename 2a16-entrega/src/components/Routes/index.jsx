import {Switch, Route} from 'react-router-dom'
import Form from '../../pages/Form'
import BemVindo from '../../pages/BemVindo'

export default function RoutesContainer({modoClaro, setModoClaro}) {
    
    return <Switch>
        <Route exact path='/'>
            <Form  modoClaro={modoClaro} setModoClaro={setModoClaro}/>
        </Route>
        <Route exact path='/bemVindo/:nome'>
            <BemVindo modoClaro={modoClaro} setModoClaro={setModoClaro}/>
        </Route>
    </Switch>
}