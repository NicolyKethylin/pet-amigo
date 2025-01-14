import { NavLink, useLocation } from "react-router-dom"

function Nav() {
 const location = useLocation();

 return (
  <div>
   <nav>

    <div>
     {location.pathname !== "/" && (<NavLink to="/">Home</NavLink>)}
     {location.pathname !== "/cadastro" && (<NavLink to="/cadastro">Cadastre o pet</NavLink>)}
     {location.pathname !== "/adoteumamigo" && (<NavLink to="/adoteumamigo">Adote</NavLink>
     )}
    </div>
   </nav>
  </div>
 )
}
export default Nav;
