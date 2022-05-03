import React from "react";

let  Card=(props)=>{
  return(
    <div className="cards">
      
        <div className="fleX">
        <img src={props.imgsrc} alt="" srcset="" />
      <><hr ></hr></>
        <div className="movieName">{props.movieName}</div>
        <div className="discrip">{props.discrip} </div>
        <button>{props.btn}</button>
        </div>
      
    </div>
   
  );};


  

export default Card;    