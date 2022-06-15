import React from 'react';
import "./ItemDetail.css";


const ItemDetail = ({producto}) => {
    console.log(producto)
  return (
    <div>
        <h1> holaaaa</h1>
      <h1 className="namee"> {producto.name} </h1>
    </div>
  )
}




export default ItemDetail;
