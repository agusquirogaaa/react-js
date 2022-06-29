import React from "react"
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext" 
import Cartlist from "./CartList/CartList";
import "./Cart.css"

const Cart = () => {

  const { cartList } = useCartContext()
  
  return(
      <div>
          <div> 
        
            {cartList.length === 0 ? 
                <div className="noProductos">
                    <div className="textoCarritoVacio">Usted no tiene productos en el carrito</div>
                    <Link to='/'>
                        <button class="btn btn-outline-light seleccionarProductos">Seleccionar productos</button>
                    </Link>
                </div>
            :
                <>
                
                  <div id="carrito">
                      <div>
                          <h2 className="tituloCart">Carrito <i className="fas fa-shopping-cart icono-carrito " ></i></h2>
                          <Cartlist/>
                      </div>
                  </div>  
                </>
            }
          </div>
      </div> 
  ) 
}

export default Cart
