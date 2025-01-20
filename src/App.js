import Nav from './componentes/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';



// Componetes
import Home from './pages/Home.js';
import Adote from './pages/Adote.js';
import Cadastro from './pages/Cadastro.js';
import Rodape from './componentes/Rodape.js';

function App() {
 return (
  <BrowserRouter>
   <div className="App flex flex-col min-h-screen">
    <Nav />

    <div className='flex  flex-grow '>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/adoteumamigo" element={<Adote />} />
     </Routes>
    </div>

    <Rodape />
   </div>

  </BrowserRouter>
 );
}

export default App;
