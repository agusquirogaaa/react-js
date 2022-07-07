import React from 'react'
import { useCartContext } from '../../Context/CartContext'
import "./CartList.css"
import {Link} from "react-router-dom"

const Cartlist = () => {
    const { cartList,precioTotal,removeItem,vaciarCarrito } = useCartContext()
    return (
        <div className="contenedor">
        {cartList.map(product =>
            <div className="item" key={product.id}>
                <img className="imagen" src={product.imagenId} alt="imagen" height="150px"/>
                <h5 className=""> {product.nombre}</h5>
                <h5 className=""> Precio: ${product.precio}</h5>
                <h5 className="">Cantidad:  {product.cantidad}</h5>
                <button className='botonBorrar btn btn-outline-black' onClick={()=> removeItem(product.id)}>X</button> 
                <div className="precioTotal">
                
                </div>
            </div>
                                                        
            )}
            <h2>Total: ${precioTotal()}</h2> 
            <div className="botonCart">
                <button onClick={vaciarCarrito} className='btn btn-outline-dark'>Vaciar carrito
                          <i className="fa-solid fa-trash iconoBasura"></i>
                </button>
                <Link to='/Checkout'> <button className="btn btn-outline-dark">Finalizar Compra</button> </Link>
            </div>
        </div>
  )
}

export default Cartlist