import React from 'react';
import "./ItemDetail.css";
import ItemCount from "./ItemCount"



const ItemDetail = ({producto}) => {
   
  return (
    <div>
      
      <div key={producto.id} id="contenedordetail">
          <div className="imagendetail"> 
             <img src={producto.url} alt="remera" /> 
          </div>
          <div className="textodetail">
             <h1> {producto.name.toUpperCase()} </h1>
             <h1> {producto.precio} </h1>
             <p> Las remeras son de Algodón. Tienen corte Oversize y es un único talle </p>
              < ItemCount  stock={producto.stock}  />
          </div>
      </div> 
      
    </div>
  )
}





export default ItemDetail;
/*
<div> {producto[2].url} </div>
      <h1 className="namee"> {producto[0].name} </h1>
      <h1 className="namee"> </h1>*/