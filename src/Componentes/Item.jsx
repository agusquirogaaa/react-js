import React from 'react'
import "./Item.css"
import {Link} from 'react-router-dom'


const Item = ({ productos }) =>{
    
    return(
        <div className="productosItem">
          
            <img className="imagenTienda" src= {productos.url} alt="img"/>
            <div id="texto">
                <h2>{productos.name}</h2>
                <h2> ${productos.precio} </h2>
                <h2 className="stockPalabras">Stock:{productos.stock}</h2>
                <button  className="btn btn-outline-light"> <Link to={`/detalle/${productos.id}`} className="botonComprar"> Comprar </Link></button>
            </div>
            
            
            
       </div> 
    )
}
export default Item;