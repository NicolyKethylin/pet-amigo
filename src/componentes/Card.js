import Btn from './Btn'
export const Card = ({ namePet, descrPet, portPet, especiePet }) => {
 return (
  <div>
   <div className="card">

    <div className="text-body-card">
     <h2>Nome do pet: {namePet} </h2>
     <p>Descrição do pet: {descrPet}</p>
     <p>Porte: {portPet}</p>
     <p>Especie:{especiePet}</p>
    </div>
    <Btn text="Adotar" className={"cursor-pointer bg-roxo text-branco p"} />
   </div>
  </div>

 )
}
