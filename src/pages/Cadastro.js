import React from 'react';
import Formulario from '../componentes/Formulario';

function Cadastro() {
 return (
  <div className='container mx-auto flex justify-center mt-6'>
   <div className=' flex flex-col bg-cinza  rounded-lg shadow-lg w-full md:w-2/4 p-14'>
    <h1 className='text-2xl font-sans'>Cadastre o pet aqui!</h1>
    <p className='text-sm font-sans mt-6'>Ajude-nos a conhecer melhor o seu pet para oferecer o melhor cuidado possível.</p>
    <Formulario />

   </div>

  </div>
 );
}

export default Cadastro;