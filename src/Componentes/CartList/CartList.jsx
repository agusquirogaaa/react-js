import React from 'react'
import { useCartContext } from '../../Context/CartContext'
import "./CartList.css"

const Cartlist = () => {
    const { cartList,priceTotal,removeItem,emptyCart } = useCartContext()
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
                <button onClick={emptyCart} className='vaciarCarrito btn btn-outline-black'>Vaciar carrito
                    <i className="fa-solid fa-trash iconoBasura"></i>
                </button>
                <h2 className="cartItems__total">Total: ${priceTotal()}</h2> 
                </div>
                </div>
                                                        
            )}
        </div>
  )
}

export default Cartlist