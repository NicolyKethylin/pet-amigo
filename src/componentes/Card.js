import { useState } from 'react';
import Btn from './Btn';


export const Card = ({ namePet, descrPet, portPet, especiePet }) => {
 const [buttonText, setButtonText] = useState("Adotar");

 const handleButtonClick = () => {
  setButtonText(buttonText === "Adotar" ? "Adotei" : "Adotar");
 };


 return (
  <div>
   <div className="card">

    <div className="text-body-card">
     <h2>Nome do pet: {namePet} </h2>
     <p>Descrição do pet: {descrPet}</p>
     <p>Porte: {portPet}</p>
     <p>Especie:{especiePet}</p>
    </div>
    <Btn
     text={buttonText}
     className="cursor-pointer text-branco py-5 px-9 rounded ${bgColor}"

     iconeHeart={true}
     onClick={handleButtonClick}
    />
   </div>
  </div>

 )
}
