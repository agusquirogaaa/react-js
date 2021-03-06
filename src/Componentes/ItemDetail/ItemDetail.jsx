import React from 'react';
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from "../../Context/CartContext"


const ItemDetail = ({producto}) => {
   
  const {addToCart} = useCartContext()
  const [isItemCount, setIsItemCount] = useState(true);

  const onAdd = (cant) => {
    console.log(cant)
    addToCart( { ...producto, cantidad: cant } )
    setIsItemCount(false)
  }

  return (
    <div>
      
      <div key={producto.id} id="contenedordetail">
          <div className="imagendetail"> 
             <img src={producto.imagenId} alt="remera" /> 
          </div>
          <div className="textodetail">
             <h1> {producto.nombre.toUpperCase()} </h1>
             <h1> ${producto.precio} </h1>
             <p>  </p>
             {isItemCount ?
              < ItemCount  initial={1} stock={producto.stock} onAdd={onAdd} />
              :  
                    <>
                        <Link to='/'>
                            <button className="btn btn-outline-light ">Seguir Comprando</button>
                        </Link>
                        <Link to='/Cart'>
                            <button className="btn btn-outline-light ">Ir al carrito</button>
                        </Link>
                    </>
                }
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