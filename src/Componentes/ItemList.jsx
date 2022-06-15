import React from 'react'
import  Item  from './Item'

const ItemList = ({ productos }) =>{
    
   return (
     <ul> {
       productos.map((prod) => {
         return <Item key={prod.id} productos={prod} />   
       })
    }
    </ul>     
   )
   }

export default ItemList;
