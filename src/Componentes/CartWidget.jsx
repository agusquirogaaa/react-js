import carrito from "../carrito-de-compras.png"
import "./CartWidget.css"

function CartWidget () {
    return (
        <div> 
            <img className="logo" src= { carrito } alt="carrito"/>
        </div>
    )
}

export default CartWidget