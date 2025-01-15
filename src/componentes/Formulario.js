import { useState } from "react";
import Btn from "./Btn.js";

function Formulario() {
 const [name, setName] = useState("");
 const [descricao, setDescricao] = useState("");
 const [porte, setPorte] = useState("");
 const [especie, setEspecie] = useState("");
 const [peso, setPeso] = useState("");


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
  if (descricao) {
   console.log("Descrição:", descricao);
  }
  console.log("Porte:", porte);
  console.log("Espécie:", especie);
  console.log("Peso:", peso);
 }

 return (
  <form className="" onSubmit={handleSubmit}>
   <div className="mt-8">
    <label htmlFor="name" required className="block ">Nome</label>
    <input
     type="text"
     name="name"
     id="name"
     className="px-4 py-2 border rounded w-full"
     value={name}
     onChange={(e) => setName(e.target.value)}
    />
   </div>

   <div className="flex gap-4">
    <div className="">
     <label htmlFor="porte" className="block">Porte do pet</label>
     <select id="porte" required placeholder="Escolha o porte" className="py-1 pr-6 pl-2 border rounded w-full" value={porte} onChange={(e) => setPorte(e.target.value)}

     >
      <option value="">Escolha o porte</option>
      <option value="pequeno">Pequeno</option>
      <option value="medio">Médio</option>
      <option value="grande">Grande</option>
     </select>
    </div>

    <div className="">
     <label htmlFor="peso" className="block">Peso (kg)</label>
     <input
      type="text"
      name="peso"
      id="peso"
      className="py-1 pr-6 pl-2 border rounded w-full"
      onChange={handlePesoChange}
      onBlur={handlePesoBlur}
      value={peso}
      placeholder="Digite o peso" required
     />
    </div>
   </div>

   <div className="flex gap-4 ">
    <div className="">
     <label htmlFor="especie" className="block">Espécie</label>
     <select id="especie" className="px-4 py-2 border rounded w-full" value={especie} onChange={handleEspecieChange} required>
      <option value=""></option>
      <option value="cachorro">Cachorro</option>
      <option value="gato">Gato</option>
      <option value="passaro">Pássaro</option>
      <option value="outros">Outros</option>
     </select>
    </div>

    {especie === "outros" && (
     <div className="
 ">
      <label htmlFor="descricao" className="block ">Outros</label>
      <input
       type="text"
       className="px-4 py-2 border rounded w-full"
       value={descricao}
       onChange={(e) => setDescricao(e.target.value)}
      />
     </div>
    )}
   </div>


   <div className="mt-6">
    <Btn text="Cadastrar" />
   </div>
  </form>
 );
}

export default Formulario;