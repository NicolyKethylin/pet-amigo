import { useState } from "react";
import Btn from "./Btn.js";

function Formulario() {
 const [option, setOption] = useState("");

 const handleChange = (e) => {
  setOption(e.target.value);
 };

 return (
  <div>
   <form className="grid grid-rows-6 gap-4">
    <label>
     Name:
     <input type="text" name="name" className="px-8 py-0.5 border rounded" />
    </label>

    <label>
     Porte do pet:
     <select className="px-8 py-0.5 border rounded">
      <option value="pequeno">Pequeno</option>
      <option value="medio">Médio</option>
      <option value="grande">Grande</option>
     </select>
    </label>

    <label>
     Peso (kg):
     <input type="number" name="peso" className="px-1 py-0.5 border rounded" />
    </label>

    <label>
     Espécie:
     <select className="px-8 py-0.5 border rounded" value={option} onChange={handleChange}>
      <option value="cachorro">Cachorro</option>
      <option value="gato">Gato</option>
      <option value="passaro">Pássaro</option>
      <option value="outros">Outros</option>
     </select>
    </label>

    {option === "outros" && (
     <label className="block">
      Especifique outros:
      <input type="text" name="outros" placeholder="Especifique outros" className="px-8 py-0.5 border rounded" />
     </label>
    )}

   </form>
   <Btn text="Cadastre-se" />
  </div>
 );
}

export default Formulario;