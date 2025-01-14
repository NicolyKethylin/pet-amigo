import { NavLink, useLocation } from "react-router-dom"

function Nav() {
 const location = useLocation();

 return (
  <div>
   <nav>
    <div className="w-full h-24 bg-verde">
     {location.pathname !== "/" && (<NavLink to="/" className='text-branco'>Home</NavLink>)}
     {location.pathname !== "/cadastro" && (<NavLink to="/cadastro" className='text-branco'>Cadastre o pet</NavLink>)}
     {location.pathname !== "/adoteumamigo" && (<NavLink to="/adoteumamigo" className='text-branco'>Adote</NavLink>
     )}
    </div>
   </nav>
  </div>
 )
}
export default Nav;
