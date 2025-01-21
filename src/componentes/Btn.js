import React, { useState } from "react";
import "./Btn.css";

function Btn({ text, className, iconeHeart, onClick }) {

 className = className ? className : "";

 const [isHeartSolid, setIsHeartSolid] = useState(false);

 const handleClick = () => {
  setIsHeartSolid(!isHeartSolid);
  if (onClick) {
   onClick();
  }

 };

 const buttonText = isHeartSolid ? "Adotei " : "Adotar ";

 const bgColor = buttonText === "Adotei " ? "bg-azul-escuro" : "bg-verde";

 return (
  <button className={`flex items-center ${className} ${bgColor}`}
   onClick={handleClick}>
   {iconeHeart && (
    <ion-icon
     name={isHeartSolid ? "heart" : "heart-outline"}
     className="mr-2"
    ></ion-icon>
   )}

   {text ? text : buttonText}
  </button>

 );
}

export default Btn;