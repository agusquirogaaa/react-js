import React from 'react'
import { useCartContext } from '../../Context/CartContext'
import "./CartList.css"

const Cartlist = () => {
    const { cartList,priceTotal,removeItem,emptyCart } = useCartContext()
    return (
        <div className="Contenedor">
        {cartList.map(product =>
            <div className="" key={product.id}>
                <img className="" src={product.url} alt="imagen" height="150px"/>
                <h5 className=""><span>Buzo:</span> {product.name}</h5>
                <h5 className=""><span>Precio Unitario: </span>${product.precio}</h5>
                <h5 className=""><span>Cantidad de buzos: </span>  {product.cantidad}</h5>
                <h5 className='' onClick={()=> removeItem(product.id)}>X</h5> 
                <div className="precioTotal">
                <button onClick={emptyCart} className='vaciarCarrito'>Vaciar carrito
                    <i className="fa-solid fa-trash icono-basura"></i>
                </button>
                <h2 className="cartItems__total">Total: <span>${priceTotal()}</span></h2> 
                </div>
                </div>
                                                        
            )}
        </div>
  )
}

export default Cartlist