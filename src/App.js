import { Routes, Route, BrowserRouter} from 'react-router-dom'

import Home from './pages/Home';
import Genero from './pages/Genero/index'
import Detalhe from './pages/Detalhe/index';

import '../src/styleglobal.css'


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/genero/:id' element={<Genero />}/>
              <Route path='/detalhe/:id' element={<Detalhe />}/>
            
          </Routes>
   
   </BrowserRouter>
  );
}

export default App;
