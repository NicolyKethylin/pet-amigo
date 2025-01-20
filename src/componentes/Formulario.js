import { useState, useRef } from "react";
import Btn from "./Btn.js";

function Formulario() {
 const fileInputRef = useRef(null);


 const [name, setName] = useState("");
 const [descricao, setDescricao] = useState("");
 const [porte, setPorte] = useState("");
 const [especie, setEspecie] = useState("");
 const [peso, setPeso] = useState("");
 const [fileName, setFileName] = useState("");

 const handleFileInputClick = () => {
  fileInputRef.current.click();
 }
 const handleFileChange = (e) => {
  if (e.target.files.length > 0) {
   setFileName(e.target.files[0].name);
  }
 }

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
   const formattedValue = parsedValue.toFixed(2);

   const formattedValueWithComma = formattedValue.replace('.', ',');
   setPeso(formattedValueWithComma);
  } else {
   setPeso("");
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
  console.log("Foto:", fileName);
 }

 return (
  <form className="" onSubmit={handleSubmit}>
   <div className="mt-8">
    <label htmlFor="name" required className="block text-sm/6 font-medium text-gray-900 border-none">Nome</label>
    <input
     type="text"
     name="name"
     id="name"
     className="border rounded w-full  min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6  "
     placeholder="Digite o nome do pet"
     value={name}
     onChange={(e) => setName(e.target.value)}
    />
   </div>

   <div className="grid grid-cols-2 gap-4 mt-2">
    <div className="">
     <label htmlFor="porte" className="block text-sm/6 font-medium text-gray-900">Porte do pet</label>
     <select id="porte" required className="border rounded w-full  min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6 " value={porte} onChange={(e) => setPorte(e.target.value)}
      placeholder="Escolha o porte"
     >
      <option value="">Escolha o porte</option>
      <option value="pequeno">Pequeno</option>
      <option value="medio">Médio</option>
      <option value="grande">Grande</option>
     </select>
    </div>

    <div className="">
     <label htmlFor="peso" className="block text-sm/6 font-medium text-gray-900">Peso (kg)</label>
     <input
      type="text"
      name="peso"
      id="peso"
      className="border rounded w-full  min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
      onChange={handlePesoChange}
      onBlur={handlePesoBlur}
      value={peso}
      placeholder="0,000" required
     />
    </div>
   </div>

   <div className="grid grid-cols-2 gap-4 mt-2">
    <div className="">
     <label htmlFor="especie" className="block text-sm/6 font-medium text-gray-900">Espécie</label>
     <select id="especie" className="border rounded w-full  min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6 " placeholder="Selecione a espécie" value={especie} onChange={handleEspecieChange} required>
      <option value="">Selecione a espécie</option>
      <option value="cachorro">Cachorro</option>
      <option value="gato">Gato</option>
      <option value="passaro">Pássaro</option>
      <option value="outros">Outros</option>
     </select>

    </div>

    {especie === "outros" && (
     <div className="
 ">
      <label htmlFor="descricao" className="block text-sm/6 font-medium text-gray-900">Outros</label>
      <input
       type="text"
       className="border rounded w-full  min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6 "
       value={descricao} placeholder="Descreva a espécie"
       onChange={(e) => setDescricao(e.target.value)}
      />
     </div>

    )}

    <div>
     <input
      type="file"
      name="arquivos"
      ref={fileInputRef}
      className="hidden"
      onChange={handleFileChange}
     />
     <button
      type="button"
      onChange={handleFileChange}
      onClick={handleFileInputClick}
      className="cursor-pointer bg-amarelo text-white py-2 px-4 rounded mt-6 text-sm"
     >
      Escolha a foto do pet
     </button>
     {fileName && <p className="mt-2 text-sm text-gray-600">{fileName}</p>}

    </div>
   </div>


   <div className="mt-6">
    <Btn text="Cadastrar" className="cursor-pointer btn-custom  grid justify-self-end" />
   </div>
  </form>
 );
}

export default Formulario;