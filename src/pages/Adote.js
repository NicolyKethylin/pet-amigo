
import { Card } from "../componentes/Card";

function Adote() {

 //INFORMAÇÕES DOS PETS
 const pet = {
  namePet: 'Rex',
  descrPet: 'Um cachorro amigável',
  portPet: 'Grande',
  especiePet: 'Cachorro'
 };


 return (

  <div className="container">
   <div className="texto-cabecalho">
    <h1>Adote um pet</h1>
    <p>Selecione um pet para adotar</p>
   </div>
   <Card
    namePet={pet.namePet}
    descrPet={pet.descrPet}
    portPet={pet.portPet}
    especiePet={pet.especiePet}
   />
  </div>
 );
}

export default Adote;
