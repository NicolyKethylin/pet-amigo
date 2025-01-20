
import Formulario from '../componentes/Formulario';

function Cadastro() {
 return (
  <div className="container content-center">
   <div className='flex items-center justify-center max-screen content-center '>
    <div className='flex flex-col bg-slate-200 rounded shadow-lg  min-w-lg p-16'>
     <h1 className='text-2xl text-gray-900'>Cadastre o pet aqui!</h1>
     <p className='mt-4 text-sm text-gray-600'>Ajude-nos a conhecer melhor o pet para oferecer o melhor cuidado possível.</p>
     <Formulario />
    </div>
   </div>
  </div>
 );
}


export default Cadastro;