import Formulario from '../componentes/Formulario.js';

function Cadastro() {
 return (
  <div className='container mx-auto p-10 p-10 bg-cinza rounded-lg min-w-min max-w-2xl mt-8 shadow-md'>
   <h1 className='font-bold text-2xl flex justify-center'>Cadastre seu pet aqui:</h1>
   <Formulario />
  </div>
 );
}

export default Cadastro;