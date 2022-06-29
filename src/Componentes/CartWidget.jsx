import "./CartWidget.css"
import {Link} from "react-router-dom"


function CartWidget () {
    return (
        <div> 
             <Link to="/Cart" className="carrito"><i className="fas fa-shopping-cart icono-carrito"></i></Link>
        </div>
    )
}

export default CartWidget