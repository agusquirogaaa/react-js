import React from 'react'


const Item = ({ productos }) =>{
    
    return(

        <div>
            <img  src= {productos.url} alt="img"/>
            <div>{productos.name}</div>
            <div> {productos.precio} </div>
            <div>Stock:{productos.stock}</div>
            
            <button>Comprar</button>
            
       </div> 
    )
}
export default Item;