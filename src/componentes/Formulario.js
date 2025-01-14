import { useState } from "react";
import Btn from "./Btn.js";

function Formulario() {
 const [name, setName] = useState("");
 const [descricao, setDescricao] = useState("");
 const [porte, setPorte] = useState("");
 const [especie, setEspecie] = useState("");
 const [peso, setPeso] = useState("");

 const handlePorteChange = (e) => {
  setPorte(e.target.value);
 };

 const handleDescricaoChange = (e) => {
  setDescricao(e.target.value);
 };

 const handleEspecieChange = (e) => {
  setEspecie(e.target.value);
 };

 const handlePesoChange = (e) => {
  let value = e.target.value;


  const regex = /^[0-9]*[.,]?[0-9]*$/;
  if (regex.test(value)) {
   setPeso(value);
  }
 };

 const handlePesoBlur = () => {
  let value = peso;


  if (parseFloat(value.replace(',', '.')) < 0) {
   value = "0";
  }


  const valueWithDot = value.replace(',', '.');
  const parsedValue = parseFloat(valueWithDot);

  if (!isNaN(parsedValue)) {
   const formattedValue = parsedValue.toFixed(3);

   const formattedValueWithComma = formattedValue.replace('.', ',');
   setPeso(formattedValueWithComma);
  } else {
   setPeso("0,000");
  }
 };
 const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Nome:", name);
  console.log("Descrição:", descricao);
  console.log("Porte:", porte);
  console.log("Espécie:", especie);
  console.log("Peso:", peso);
 };
 return (
  <form className="grid grid-cols-1 " onSubmit={handleSubmit}>
   <div className="flex flex-col mt-2">
    <label className=" mt-6">Nome</label>
    <input type="text" name="name" id="name" className="px-4 py-2 border rounded" value={name} onChange={(e) => setName(e.target.value)} />
   </div>


   <div className="flex flex-row gap-4">
    <div className="flex flex-col  basis-2/4">
     <label className="mt-2">Porte do pet:</label>
     <select id="porte" className="px-2 py-2  border rounded" value={porte} onChange={handlePorteChange}>
      <option value="pequeno">Pequeno</option>
      <option value="medio">Médio</option>
      <option value="grande">Grande</option>
     </select>
    </div>

    <div className="flex flex-col basis-3/4">
     <label htmlFor="peso" className="mt-2">Peso (kg):</label>
     <input
      type="text"
      name="peso"
      id="peso"
      className="px-4 py-2 border rounded"
      onChange={handlePesoChange}
      onBlur={handlePesoBlur}
      value={peso}
      placeholder="Digite o peso"
     />
    </div>
   </div>

   <div className="flex flex-col">
    <label htmlFor="descricao" className="mt-2">Descrição:</label>
    <div className="mt-2">
     <textarea
      rows={3}
      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
      value={descricao} onChange={(e) => setDescricao(e.target.value)}
     />
    </div>
   </div>
   <div className="flex flex-row gap-4">
    <div className="flex flex-col basis-2/4">
     <label htmlFor="especie" className="mt-2">Espécie:</label>
     <select id="especie" className="px-4 py-2 border rounded" value={especie} onChange={handleEspecieChange}>
      <option value=""></option>
      <option value="cachorro">Cachorro</option>
      <option value="gato">Gato</option>
      <option value="passaro">Pássaro</option>
      <option value="outros">Outros</option>
     </select>
    </div>

    {especie === "outros" && (
     <div className="flex flex-col basis-2/4 mt-2">
      <label htmlFor="outros">Especifique outros:</label>
      <input type="text" name="outros" id="outros" placeholder="Especifique outros" className="px-4 py-2 border rounded" />
     </div>

    )}
   </div>
   <div className="flex flex-col mt-8 items-end">
    <Btn text="Cadastrar" />
   </div>
  </form>

 );
}

export default Formulario;