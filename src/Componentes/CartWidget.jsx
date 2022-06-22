import carrito from "../carrito-de-compras.png"


function CartWidget () {
    return (
        <div> 
            <img className="logocarro" src= { carrito } alt="carrito" />
        </div>
    )
}

export default CartWidget