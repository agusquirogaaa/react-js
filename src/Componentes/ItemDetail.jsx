import React from 'react';
import "./ItemDetail.css";


const ItemDetail = ({producto}) => {
   
  return (
    <div>
      {producto.map((prod) =>
      <div key={prod.id} > 

        <img src={prod.url} alt="remera" /> 
        <h1 className="namee"> {prod.name} </h1>
        <h1 className="namee"> {prod.precio} </h1>
        <p> Las remeras son de Algodón. Tienen corte Oversize y es un único talle </p>

      </div> )}
      
    </div>
  )
}





export default ItemDetail;
/*
<div> {producto[2].url} </div>
      <h1 className="namee"> {producto[0].name} </h1>
      <h1 className="namee"> </h1>*/