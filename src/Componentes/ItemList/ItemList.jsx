import React from 'react'
import  Item  from '../Item/Item'
import "./ItemList.css"

const ItemList = ({ productos }) =>{
    
   return (
     <div className="containerProductos"> {
       productos.map((prod) => {
         return <Item key={prod.id} productos={prod} />   
       })
    }
    </div>     
   )
   }

export default ItemList;
