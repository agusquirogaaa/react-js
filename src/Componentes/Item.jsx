import React from 'react'


const Item = ({ productos }) =>{
    console.log(productos.id)
    return(

        <div  key={productos.id}>
            <img  src= {productos.url} alt="img"/>
            <div>{productos.name}</div>
            <div> {productos.precio} </div>
            <div>Stock:{productos.stock}</div>
            
            <button>Comprar</button>
            
       </div> 
    )
}
export default Item;