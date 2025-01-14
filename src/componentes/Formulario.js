import { useState } from "react";

function Formulario() {
 const [option, setOption] = useState("");

 const handleChange = (e) => {
  setOption(e.target.value);

 }
 return (
  <form>
   <label>
    <label>Name: <input type="text" name="name" /></label>

    <label>
     Espécie:
     <select className="especie" value={option} onChange={handleChange}>
      <option value="cachorro">Cachorro</option>
      <option value="gato">Gato</option>
      <option value="passaro">Pássaro</option>
      <option value="outros">Outros</option>
     </select>
    </label>

    {option === "outros" && (
     <input type="text" name="outros" placeholder="Especifique outros" />)}</label>

   <label>Porte do pet:
    <select className="porte">
     <option value="pequeno">Pequeno</option>
     <option value="medio">Médio</option>
     <option value="grande">Grande</option>
    </select>
   </label>

   <label>Peso (kg):
    <input type="number" name="peso" />
   </label>
   <input type="submit" value="Cadastre" />

  </form>
 );
}

export default Formulario;