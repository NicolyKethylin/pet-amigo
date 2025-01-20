import { NavLink, useLocation } from "react-router-dom"



function Nav() {
 const location = useLocation();

 return (
  < div className="flex items-center justify-between p-4 bg-roxo">

   <div className=" grid grid-cols-4 w-full items-center">

    <div className="logo-container col-start-2 col-end-3 flex">
     <img src="/imagens/logo.png" alt="logo" className=" h-28 w-auto" />
     <p className="pet-amigo text-branco">Pet Amigo</p>
    </div>

    <div className="text-branco">
     <nav className="col-span-4 flex justify-end items-center gap-6 text-branco">
      {location.pathname !== "/" && (
       <NavLink to="/" className="text-branco hover:text-verdao">
        Home
       </NavLink>
      )}
      {location.pathname !== "/cadastro" && (
       <NavLink to="/cadastro" className="text-branco hover:text-verdao">
        Cadastre o pet
       </NavLink>
      )}
      {location.pathname !== "/adoteumamigo" && (
       <NavLink to="/adoteumamigo" className="text-branco  hover:text-verdao">
        Adote
       </NavLink>
      )}

     </nav>
    </div>

   </div >
  </div>
 )
}
export default Nav;
