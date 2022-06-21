import React from 'react'
import "./Item.css"
import {Link} from 'react-router-dom'

const Item = ({ productos }) =>{
    
    return(
        <div>
          
            <img  src= {productos.url} alt="img" max-width="400px" max-height=""/>
            <div id="texto">
                <h2>{productos.name}</h2>
                <h2> {productos.precio} </h2>
                <h2>Stock:{productos.stock}</h2>
                <button id="botonComprar"> <Link to={`/detalle/${productos.id}`}> Comprar </Link></button>
            </div>
            
            
            
       </div> 
    )
}
export default Item;