import Nav from './componentes/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';



// Componetes
import Home from './pages/Home.js';
import Adote from './pages/Adote.js';
import Cadastro from './pages/Cadastro.js';

function App() {
 return (
  <BrowserRouter>
   <div className="App ">
    <Nav />
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/cadastro" element={<Cadastro />} />
     <Route path="/adoteumamigo" element={<Adote />} />


    </Routes>
   </div>

  </BrowserRouter>
 );
}

export default App;
