import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutesContainer from './components/Routes';
import { GlobalStyle } from './globalStyle';

function App() {
  const [modoClaro, setModoClaro] = useState(true);


  return (
    <div className="App">
      <GlobalStyle modoClaro={modoClaro}/>
        <BrowserRouter>
          <RoutesContainer modoClaro={modoClaro} setModoClaro={setModoClaro}/>
        </BrowserRouter>
    </div>
  );
}

export default App;
